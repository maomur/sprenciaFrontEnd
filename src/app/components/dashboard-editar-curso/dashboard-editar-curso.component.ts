import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-dashboard-editar-curso',
  templateUrl: './dashboard-editar-curso.component.html',
  styleUrls: ['./dashboard-editar-curso.component.css']
})
export class DashboardEditarCursoComponent {

  createForm: FormGroup


  constructor(private router: Router, private CursosService: CursosService) {

    this.createForm = new FormGroup({
      nombre: new FormControl('', []),
      descripcion: new FormControl('', []),
      ciudad: new FormControl('', []),
      fecha_inicio: new FormControl('', []),
      fecha_fin: new FormControl('', []),
      foto1: new FormControl('', []),
      foto2: new FormControl('', []),
      foto3: new FormControl('', []),
      precio: new FormControl('', []),
      horario: new FormControl('', []),
      total_horas: new FormControl('', []),
      estado: new FormControl('', []),
      isDelete: new FormControl('', []),
      rating: new FormControl('', []),
      categoria: new FormControl('', []),
    })
  }

  async onSubmit() { }


  checkControl() {
    console.log('CHECK CONTROL')
  }



}
