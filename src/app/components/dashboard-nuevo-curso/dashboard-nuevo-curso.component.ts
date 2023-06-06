import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-dashboard-nuevo-curso',
  templateUrl: './dashboard-nuevo-curso.component.html',
  styleUrls: ['./dashboard-nuevo-curso.component.css']
})
export class DashboardNuevoCursoComponent {


  createForm: FormGroup;

  constructor(private usuariosService: UsuarioService, private router: Router) {

    this.createForm = new FormGroup({
      nombre: new FormControl('', [
        Validators.required
      ]),
      descripcion: new FormControl('', [
        Validators.required
      ]),
      fecha_inicio: new FormControl('',
        [
          Validators.required
        ]),
      fecha_fin: new FormControl('', [
        Validators.required
      ]),
      foto1: new FormControl('', []),
      foto2: new FormControl('', []),
      foto3: new FormControl('', []),
      precio: new FormControl('', [
        Validators.required
      ]),
      horario: new FormControl('', [
        Validators.required
      ]),
      total_horas: new FormControl('', [
        Validators.required
      ]),
      estado: new FormControl('', [
        Validators.required
      ]),
      rating: new FormControl('', [
        Validators.required
      ]),
      ciudad: new FormControl('', [
        Validators.required
      ]),
      categoria: new FormControl('', [

      ])
    })
  }

  checkControl(controlName: string, errorName: string) {
    if (this.createForm.get(controlName)?.hasError(errorName) && this.createForm.get(controlName)?.touched) {
      return true;
    } else {
      return false;
    }
  }


  getDataCreate() { }

  // getDataCreate() {
  //   console.log(this.createForm.value);
  //   this.CursosService.register(this.createForm.value).subscribe(response => {
  //     console.log(response);

  //     try {
  //       if (response) {
  //         alert('Curso creado con éxito')
  //       } else {
  //         alert('No hemos podido crear el curso')
  //       }
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   })
  // }



}
