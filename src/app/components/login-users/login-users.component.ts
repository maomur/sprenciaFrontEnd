import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login-users',
  templateUrl: './login-users.component.html',
  styleUrls: ['./login-users.component.css']
})
export class LoginUsersComponent {

  constructor(
    private usuariosService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  getDataLogin(pForm: any) {
    this.usuariosService.login(pForm.value).subscribe(response => {
      if (response.error) {
        alert(response.error)
      } else {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/dashboard/home'])
      }
    })
  }


}
