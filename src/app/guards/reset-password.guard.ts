import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ResetPasswordGuard implements CanActivate {


  constructor(private router: Router) { }

  canActivate(): boolean | UrlTree {
    let email: string | null = localStorage.getItem('token');

    if (email === 'email') {
      this.router.navigate(['/activities']);
      return false;
    }
    return true;
  }


}
