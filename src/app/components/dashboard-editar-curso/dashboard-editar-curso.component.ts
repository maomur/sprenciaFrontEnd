import { Component, OnInit } from '@angular/core';
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
export class DashboardEditarCursoComponent implements OnInit {

  public miCurso: Curso | any;

  createForm: FormGroup;

  constructor(private router: Router, private cursosService: CursosService, private route: ActivatedRoute) {

    this.createForm = new FormGroup({
      nombre: new FormControl('', [
        Validators.required, Validators.minLength(10)
      ]),
      descripcion: new FormControl('', [
        Validators.required, Validators.minLength(10)
      ]),
      fecha_inicio: new FormControl('', [
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
        Validators.required
      ])
    })

  }

  ngOnInit(): void {
    //Obtenemos el ID
    this.route.params.subscribe(async params => {
      let id = parseInt(params['id']);
      //Obtengo Curso por Id
      this.miCurso = await this.cursosService.getById(id);
      //Si existe Id 
      if (params['id']) {
        const miCurso = await this.cursosService.getById(id);
        console.log(miCurso);
        this.createForm = new FormGroup({
          id: new FormControl(miCurso?.id, []),
          nombre: new FormControl(miCurso?.nombre, []),
          descripcion: new FormControl(miCurso?.descripcion, []),
          ciudad: new FormControl(miCurso?.ciudad, []),
          fecha_inicio: new FormControl(miCurso?.fecha_inicio, []),
          fecha_fin: new FormControl(miCurso?.fecha_fin, []),
          foto1: new FormControl(miCurso?.foto1, []),
          foto2: new FormControl(miCurso?.foto2, []),
          foto3: new FormControl(miCurso?.foto3, []),
          precio: new FormControl(miCurso?.precio, []),
          horario: new FormControl(miCurso?.horario, []),
          total_horas: new FormControl(miCurso?.total_horas, []),
          estado: new FormControl(miCurso?.estado, []),
          isDelete: new FormControl(miCurso?.isDelete, []),
          rating: new FormControl(miCurso?.rating, []),
          categoria: new FormControl(miCurso?.categoria, [])
        })
      }
    }
    )
  }

  async onSubmit() {

    if (this.createForm.value.id) {
      console.log(this.createForm)
      console.log(this.createForm.value.id)


      const response = await this.cursosService.updateCourseById(this.createForm.value);

      console.log('RESPONSE', response);

      if (response.affectedRows) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Curso actualizado con éxito',
          timer: 4500
        });
        this.router.navigate(['/dashboard/listar-cursos']);
      } else {
        console.log(response);
      }
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
