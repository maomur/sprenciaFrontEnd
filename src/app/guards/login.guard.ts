import { Injectable } from '@angular/core';
import { Router, CanActivate, UrlTree } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router) { }


  canActivate(): boolean | UrlTree {
    let token: string | null = localStorage.getItem('token');
    if (token === null) {
      this.router.navigate(['/home']);
      return false
    }
    return true;
  }
}
