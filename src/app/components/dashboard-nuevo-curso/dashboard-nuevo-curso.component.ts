import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CursosService } from 'src/app/services/cursos.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-dashboard-nuevo-curso',
  templateUrl: './dashboard-nuevo-curso.component.html',
  styleUrls: ['./dashboard-nuevo-curso.component.css']
})
export class DashboardNuevoCursoComponent {


  createForm: FormGroup;

  constructor(private router: Router, private cursosService: CursosService) {

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
      categoria: new FormControl('', [])
    })
  }


  async onSubmit() {
    const { nombre, descripcion, ciudad, fecha_inicio, fecha_fin, /*foto1, foto2, foto3,*/ precio, horario, total_horas, estado, isDelete, rating, categoria } = this.createForm.value;

    console.log('NOMBRE', nombre)
    console.log(this.createForm.value)

    const newCourse = new FormData();

    newCourse.append('nombre', nombre);
    newCourse.append('descripcion', descripcion);
    newCourse.append('ciudad', ciudad);
    newCourse.append('fecha_inicio', fecha_inicio);
    newCourse.append('fecha_fin', fecha_fin);
    // newCourse.append('foto1', foto1);
    // newCourse.append('foto2', foto2);
    // newCourse.append('foto3', foto3);
    newCourse.append('precio', precio);
    newCourse.append('horario', horario);
    newCourse.append('total_horas', total_horas);
    newCourse.append('estado', estado);
    newCourse.append('isDelete', isDelete);
    newCourse.append('rating', rating);
    newCourse.append('categoria', categoria);


    let response = await this.cursosService.create(newCourse);
    console.log('NEW COURSE', newCourse);
    console.log(response)

    if (response) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Curso creado con éxito',
        timer: 4500
      })
      this.router.navigate(['/dashboard/home']);
    } else {
      console.log(response);
    }

  }

  checkControl(controlName: string, errorName: string) {
    if (this.createForm.get(controlName)?.hasError(errorName) && this.createForm.get(controlName)?.touched) {
      return true;
    } else {
      return false;
    }
  }


}
