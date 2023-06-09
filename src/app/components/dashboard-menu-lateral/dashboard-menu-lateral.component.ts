import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-menu-lateral',
  templateUrl: './dashboard-menu-lateral.component.html',
  styleUrls: ['./dashboard-menu-lateral.component.css']
})
export class DashboardMenuLateralComponent {

  logout() {
    console.log('CERRAR SESIÓN')
  }

}
