import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Curso } from 'src/app/interfaces/curso.interface';
import { ComentariosService } from 'src/app/services/comentarios.service';
import { CursosService } from 'src/app/services/cursos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard-crear-comentario',
  templateUrl: './dashboard-crear-comentario.component.html',
  styleUrls: ['./dashboard-crear-comentario.component.css']
})
export class DashboardCrearComentarioComponent {

  public cursos: Curso[] = [];

  createForm: FormGroup;

  constructor(private comentariosService: ComentariosService, private router: Router, private CursosService: CursosService) {

    this.createForm = new FormGroup({
      comentario: new FormControl('', []),
      usuario: new FormControl('', []),
      curso: new FormControl()
    })

  }

  async ngOnInit() {
    this.cursos = await this.CursosService.getAll()
  }

  async getDataCreate() {

    let resultado = await this.comentariosService.create(this.createForm.value);
    console.log(resultado)
    if (resultado.affectedRows) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Comentario creado con éxito',
        showCancelButton: false,
        timer: 4500
      })
      this.router.navigate(['/dashboard/home'])
    } else {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'ERROR: No se ha agregado ningún comentario',
        showConfirmButton: false,
        timer: 4500
      })
      console.log(resultado)
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
