import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard-crear-usuario',
  templateUrl: './dashboard-crear-usuario.component.html',
  styleUrls: ['./dashboard-crear-usuario.component.css']
})
export class DashboardCrearUsuarioComponent {

  createForm: FormGroup;


  constructor(private usuariosService: UsuarioService, private router: Router) {

    this.createForm = new FormGroup({
      name: new FormControl('', []),
      lastname: new FormControl('', []),
      ciudad: new FormControl('', []),
      picture: new FormControl('', []),
      email: new FormControl('', []),
      password: new FormControl('', []),
      repitepassword: new FormControl('', []),
      roll: new FormControl('', [])
    })
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



}
