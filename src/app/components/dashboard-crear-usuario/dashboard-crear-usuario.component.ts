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


    const response = await this.usuariosService.create(this.createForm.value);

    if (response) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Usuario creado con Éxito',
        showConfirmButton: false,
        timer: 4500
      })
      this.router.navigate(['/dashboard/listar-usuarios']);
    } else {
      console.log(response);
    }

  }



}
