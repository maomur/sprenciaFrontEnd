import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recuperar-clave',
  templateUrl: './recuperar-clave.component.html',
  styleUrls: ['./recuperar-clave.component.css']
})
export class RecuperarClaveComponent {

  createForm: FormGroup;
  public code: string | any;
  public email: string | any;
  public usuario: any;


  constructor(private usuariosService: UsuarioService, private route: Router) {
    this.createForm = new FormGroup({
      email: new FormControl()
    })
  }

  async onSubmit() {

    //Capturo el email del formulario
    let { email } = this.createForm.value;
    const resultado = await this.usuariosService.getEmail(email);

    if (!resultado.error) {
      this.generateCode();
      this.addCode(email);
      this.codeInput();
      this.route.navigate(['/recuperar-codigo'])
    } else {
    }


    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Se han enviado instrucciones a tu correo',
      showConfirmButton: false,
      timer: 5500
    })
  }

  generateCode() {
    const number = Math.floor(1000 + Math.random() * 9000);
    const letterNumber = (Math.floor(Math.random() * 26));
    const letter = String.fromCharCode(65 + letterNumber);
    this.code = number + "-" + letter;
  }

  async addCode(email: string) {
    const usuario = await this.usuariosService.getUserByEmail(email);
    usuario.code = this.code;
  }

  codeInput() {
    console.log('Pasar el código al otro componente')
  }

}
