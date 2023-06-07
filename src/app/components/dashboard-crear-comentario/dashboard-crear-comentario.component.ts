import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ComentariosService } from 'src/app/services/comentarios.service';
import Swal from 'sweetalert2';

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
      usuario: new FormControl('', []),
      curso: new FormControl()
    })

  }

  async getDataCreate() {
    const { comentario, fecha_comentario, estado, usuario, isDelete, curso, curso_id } = this.createForm.value;

    const newComment = new FormData();

    newComment.append('comentario', comentario);
    newComment.append('fecha_comentario', fecha_comentario);
    newComment.append('estado', estado);
    newComment.append('usuario', usuario);
    newComment.append('isDelete', isDelete);
    newComment.append('curso', curso);
    newComment.append('curso_id', curso_id);

    let resultado = await this.comentariosService.create(newComment);

    if (resultado) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Comentario creado con éxito',
        showCancelButton: false,
        timer: 4500
      })
      this.router.navigate(['/dashboard/home'])
    } else {
      console.log(resultado)
    }


  }

}
