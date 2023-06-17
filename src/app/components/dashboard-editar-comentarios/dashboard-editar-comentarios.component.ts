import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Comentario } from 'src/app/interfaces/comentario.interface';
import { Curso } from 'src/app/interfaces/curso.interface';
import { ComentariosService } from 'src/app/services/comentarios.service';
import { CursosService } from 'src/app/services/cursos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard-editar-comentarios',
  templateUrl: './dashboard-editar-comentarios.component.html',
  styleUrls: ['./dashboard-editar-comentarios.component.css']
})
export class DashboardEditarComentariosComponent {

  createForm: FormGroup;

  public miComentario: Comentario | any;
  public cursos: Curso[] = [];

  public id: string | any;


  constructor(private router: Router, private CommentariosService: ComentariosService, private cursosService: CursosService, private route: ActivatedRoute) {

    this.createForm = new FormGroup(
      {
        comentario: new FormControl('', []),
        usuario: new FormControl('', []),
        curso: new FormControl()
      }
    )
  }

  async ngOnInit() {

    this.cursos = await this.cursosService.getAll()
    this.route.params.subscribe(async params => {
      const id = params['id'];
      this.id = id;

      const miComentario = await this.CommentariosService.getById(id);

      delete miComentario.id;
      delete miComentario.fecha_comentario;
      delete miComentario.estado;
      delete miComentario.isDelete;
      delete miComentario.curso_id;

      this.createForm.setValue(miComentario)

    })
  }

  async onSubmit() {

    const respuesta = await this.CommentariosService.editCommentById(this.id, this.createForm.value)

    if (respuesta.affectedRows) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Usuario actualizado con éxito',
        showConfirmButton: false,
        timer: 4500
      })
      this.router.navigate(['/dashboard/listar-comentarios']);
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

}
