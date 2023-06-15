import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CiudadesService } from 'src/app/services/ciudades.service';
import { UsuarioService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard-crear-usuario',
  templateUrl: './dashboard-crear-usuario.component.html',
  styleUrls: ['./dashboard-crear-usuario.component.css']
})
export class DashboardCrearUsuarioComponent {

  public ciudades: any[] = [];

  createForm: FormGroup;

  async ngOnInit() {
    this.ciudades = await this.CiudadesService.getAll()
  }


  constructor(private usuariosService: UsuarioService, private router: Router, private CiudadesService: CiudadesService) {

    this.createForm = new FormGroup({
      name: new FormControl('', [
        Validators.required, Validators.minLength(2)
      ]),
      lastname: new FormControl('', [
        Validators.required, Validators.minLength(2)
      ]),
      ciudad: new FormControl('', [
        Validators.required, Validators.minLength(2)
      ]),
      picture: new FormControl('', []),
      email: new FormControl('', [
        Validators.required, Validators.minLength(2), Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
      ]),
      password: new FormControl('', [
        Validators.required, Validators.minLength(2)
      ]),
      repitepassword: new FormControl('', [
        Validators.required, Validators.minLength(2)
      ]),
      roll: new FormControl('', [
        Validators.required, Validators.minLength(2)
      ])
    }, [this.passwordCompare])
  }

  async onSubmit() {

    let resultado = await this.usuariosService.create(this.createForm.value);

    if (resultado.affectedRows) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Usuario creado con Éxito',
        showConfirmButton: false,
        timer: 4500
      })
      this.router.navigate(['/dashboard/listar-usuarios']);
    } else {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'ERROR: No se ha agregado ningún usuario',
        showConfirmButton: false,

        timer: 4500
      })
      console.log(resultado)
    }
  }

  checkControl(controlName: string, errorName: string) {
    if (this.createForm.get(controlName)?.hasError(errorName) && this.createForm.get(controlName)?.touched) {
      return true;
    } else {
      return false;
    }
  }

  passwordCompare(pForm: AbstractControl): any {
    const password = pForm.get('password')?.value;
    const repitePass = pForm.get('repitepassword')?.value;

    if (password !== repitePass) {
      return { 'passwordcompare': true }
    }
    return null;
  }



}
