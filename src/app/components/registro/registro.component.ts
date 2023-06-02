import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private usuariosService: UsuarioService, private router: Router) {
    this.registerForm = new FormGroup({
      name: new FormControl('', [
        Validators.required
      ]),
      lastname: new FormControl('', [
        Validators.required
      ]),
      ciudad: new FormControl('', [
        Validators.required
      ]),
      picture: new FormControl('', []),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/\S+\@\S+\.\S+/)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      accept: new FormControl('', []),
      repitePassword: new FormControl('', []),

    }, [this.comparePass])
  }


  ngOnInit(): void {

  }


  checkControl(controlName: string, errorName: string): boolean {
    if (this.registerForm.get(controlName)?.hasError(errorName) && this.registerForm.get(controlName)?.touched) {
      return true;
    } else {
      return false;
    }
  }

  comparePass(form: AbstractControl): any {
    const passValue = form.get('password')?.value;
    const repitePassValue = form.get('repitePassword')?.value

    if (passValue !== repitePassValue) {
      return true
    }
    return null
  }

  async getDataRegister() {
    const { name, lastname, ciudad, picture, email, password } = this.registerForm.value;
    const newForm = new FormData();
    newForm.append('name', name)
    newForm.append('lastname', lastname)
    newForm.append('ciudad', ciudad)
    newForm.append('picture', picture)
    newForm.append('email', email)
    newForm.append('password', password)

    const response = await this.usuariosService.register(newForm);
    console.log(response);

    if (response.insertId) {
      console.log('DENTRO DEL IF')
    } else {
      console.log('FUERA DEL IF')
    }
  }


  // async getDataRegister() {
  //   this.usuariosService.register(this.registerForm.value).subscribe(response => {
  //     console.log(response);
  //     if (response) {
  //       alert('Usuario resgistrado con éxito');
  //       this.router.navigate(['/'])
  //     } else {
  //       alert('Fallo en el registro')
  //     }
  //   })
  // }




}
