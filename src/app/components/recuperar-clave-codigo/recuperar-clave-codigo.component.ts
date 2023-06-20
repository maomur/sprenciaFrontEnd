import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recuperar-clave-codigo',
  templateUrl: './recuperar-clave-codigo.component.html',
  styleUrls: ['./recuperar-clave-codigo.component.css']
})
export class RecuperarClaveCodigoComponent {

  code: string = "";

  createForm: FormGroup;


  constructor(private usuarioService: UsuarioService, private activateRoute: ActivatedRoute, private router: Router) {
    this.createForm = new FormGroup({
      code: new FormControl(),
      password: new FormControl(),
      repitePassword: new FormControl()
    })
  }

  ngOnInit(): void {

    this.usuarioService.code.subscribe(
      code => {
        this.code = code;
      }
    )
    console.log('CODE', this.code)

  }

  async onSubmit() {

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Su clave se ha actualizado con éxito',
      showConfirmButton: false,
      timer: 5500
    })
    console.log('CODE ONSUBMIT', this.code)
    this.router.navigate(['/login'])
    console.log('LÓGICA PARA ACTUALIZAR USUARIO')

  }

}
