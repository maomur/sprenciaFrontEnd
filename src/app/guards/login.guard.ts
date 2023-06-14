import { Injectable } from '@angular/core';
import { Router, CanActivate, UrlTree } from '@angular/router';
import Swal from 'sweetalert2';



@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router) { }


  //Verificar acceso a contenidos restringidos
  canActivate(): boolean | UrlTree {
    let token: string | null = localStorage.getItem('token');
    if (token === null) {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'No tienes permiso para acceder a este contenido',
        timer: 4500
      })
      this.router.navigate(['/']);
      return false
    }
    return true;
  }


  //Cerrar sesión
  logout() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Sesión cerrada con éxito',
      timer: 4500
    })
    localStorage.removeItem('token');
    localStorage.removeItem('roll');
  }


  //Comprobar si el usuario está login para mostrar logout
  isLoggedIn(): boolean {
    let token: string | null = localStorage.getItem('token');
    if (token === null) {
      return false
    }
    return true;
  }




}
