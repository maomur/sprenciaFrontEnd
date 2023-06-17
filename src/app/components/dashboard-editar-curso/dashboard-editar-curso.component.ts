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
export class DashboardEditarCursoComponent {

  formulario: FormGroup;
  public id: string | any;

  constructor(private activatedRoute: ActivatedRoute, private cursosService: CursosService, private router: Router) {

    this.formulario = new FormGroup(
      {
        nombre: new FormControl('', [Validators.required, Validators.minLength(10)]),
        descripcion: new FormControl('', [Validators.required, Validators.minLength(10)]),
        fecha_inicio: new FormControl('', [Validators.required]),
        fecha_fin: new FormControl('', [Validators.required]),
        foto1: new FormControl('', []),
        foto2: new FormControl('', []),
        foto3: new FormControl('', []),
        precio: new FormControl('', [Validators.required]),
        horario: new FormControl('', [Validators.required]),
        total_horas: new FormControl('', [Validators.required]),
        estado: new FormControl('', [Validators.required]),
        rating: new FormControl('', [Validators.required]),
        ciudad: new FormControl('', [Validators.required]),
        categoria: new FormControl('', [Validators.required])
      })
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      const id = params['id'];
      this.id = id;

      const miCurso = await this.cursosService.getById(id);

      //Elimino id para un nuevo objeto
      const { id: _, isDelete, ...cursoSinId } = miCurso;

      //Rellenar el formulario
      this.formulario.setValue(cursoSinId);
    })


  }


  async onSubmit() {
    const resultado = await this.cursosService.updateCourseById(this.id, this.formulario.value);

    if (resultado.affectedRows) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Curso actualizado con éxito',
        showConfirmButton: false,
        timer: 4500
      })
      this.router.navigate(['/dashboard/listar-cursos']);
    } else {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'ERROR: No se ha actualizado ningún curso',
        showConfirmButton: false,
        timer: 4500,
      })
    }
  }


  checkControl(controlName: string, errorName: string) {
    if (this.formulario.get(controlName)?.hasError(errorName) && this.formulario.get(controlName)?.touched) {
      return true;
    } else {
      return false;
    }
  }



}


