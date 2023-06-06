import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ComentariosService } from 'src/app/services/comentarios.service';

@Component({
  selector: 'app-dashboard-crear-comentario',
  templateUrl: './dashboard-crear-comentario.component.html',
  styleUrls: ['./dashboard-crear-comentario.component.css']
})
export class DashboardCrearComentarioComponent {

  createForm: FormGroup;

  constructor(private comentariosService: ComentariosService, private router: Router) {

    this.createForm = new FormGroup({
      comentario: new FormControl('', []),
      usuario: new FormControl('', [])
    })

  }

  getDataCreate() {
    console.log('FUNCIONA')
  }

}
