import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-recuperar-clave-codigo',
  templateUrl: './recuperar-clave-codigo.component.html',
  styleUrls: ['./recuperar-clave-codigo.component.css']
})
export class RecuperarClaveCodigoComponent {

  public code: string | any;

  createForm: FormGroup;


  constructor(private usuarioService: UsuarioService, private activateRoute: ActivatedRoute, private router: Router) {
    this.createForm = new FormGroup({
      code: new FormControl(),
      password: new FormControl(),
      repitePassword: new FormControl()
    })
  }

  async onSubmit() {


    console.log('LÓGICA PARA ACTUALIZAR EL USUARIO')

  }

}
