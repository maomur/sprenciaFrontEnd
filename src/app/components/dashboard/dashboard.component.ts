import { Component } from '@angular/core';
import { LoginGuard } from 'src/app/guards/login.guard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {

  constructor(private LoginGuard: LoginGuard) { }

}

