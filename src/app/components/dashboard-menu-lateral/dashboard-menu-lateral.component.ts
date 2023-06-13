import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginGuard } from 'src/app/guards/login.guard';

@Component({
  selector: 'app-dashboard-menu-lateral',
  templateUrl: './dashboard-menu-lateral.component.html',
  styleUrls: ['./dashboard-menu-lateral.component.css']
})
export class DashboardMenuLateralComponent {


  constructor(private router: Router, private authService: LoginGuard) { }


  logout() {
    this.authService.logout();
    this.router.navigate(['/'])
  }

}
