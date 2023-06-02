import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router) { }


  canActivate(): boolean {
    if (localStorage.getItem('token') !== null) {
      return true;
    } else {
      alert('Zona privada, necesitas usuario y contraseña');
      this.router.navigate(['/login']);
      return false
    }
  }
}
