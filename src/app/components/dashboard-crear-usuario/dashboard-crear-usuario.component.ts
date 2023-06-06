import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuarios.service';

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
      roll: new FormControl('', [])
    })
  }

  getDataCreate() {
    console.log('FUNCIONA EL CREATE USER')
  }



}
