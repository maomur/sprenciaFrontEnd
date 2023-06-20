import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(
    private usuariosService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  getDataLogin(pForm: any) {
    this.usuariosService.login(pForm.value).subscribe(response => {

      if (response.error) {
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'Error en usuario ó contraseña',
          timer: 4500
        })
      } else {
        localStorage.setItem('token', response.token);
        localStorage.setItem('roll', response.roll);
        this.router.navigate(['/dashboard/home'])
      }
    })
  }

}
