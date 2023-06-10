import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/interfaces/curso.interface';
import { CursosService } from 'src/app/services/cursos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard-editar-curso',
  templateUrl: './dashboard-editar-curso.component.html',
  styleUrls: ['./dashboard-editar-curso.component.css']
})
export class DashboardEditarCursoComponent {

  public miCurso: Curso | any;

  createForm: FormGroup;

  ngOnInit() {
    console.log('ONINIT RUN')
    this.route.params.subscribe(async params => {
      let id = parseInt(params['id']);
      this.miCurso = await this.CursosService.getById(id);
    })
  }

  constructor(private router: Router, private CursosService: CursosService, private route: ActivatedRoute) {

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


    const response = await this.CursosService.create(newCourse);

    console.log('NEW COURSE', newCourse);

    if (response.affected) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Curso creado con éxito',
        timer: 4500
      })
      this.router.navigate(['/dashboard/listar-cursos']);
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
