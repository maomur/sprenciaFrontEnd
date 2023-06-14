import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Comentario } from 'src/app/interfaces/comentario.interface';
import { Curso } from 'src/app/interfaces/curso.interface';
import { ComentariosService } from 'src/app/services/comentarios.service';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-dashboard-editar-comentarios',
  templateUrl: './dashboard-editar-comentarios.component.html',
  styleUrls: ['./dashboard-editar-comentarios.component.css']
})
export class DashboardEditarComentariosComponent implements OnInit {

  public miComentario: Comentario | any;
  public cursos: Curso[] = [];

  createForm: FormGroup;

  constructor(private router: Router, private CommentariosService: ComentariosService, private route: ActivatedRoute, private CursosService: CursosService) {

    this.createForm = new FormGroup(
      {
        comentario: new FormControl('', []),
        curso: new FormControl('', [])
      }
    )

  }

  ngOnInit(): void {
    this.route.params.subscribe(async params => {
      let id = parseInt(params['id']);
      this.miComentario = await this.CommentariosService.getById(id);
      this.cursos = await this.CursosService.getAll();
    })
  }

  async onSubmit() {
    // const response = await this.CommentariosService.create(this.createForm)
    const newCommentario = new FormData();
    const response = await this.CommentariosService.create(newCommentario)

    console.log(newCommentario)
    console.log(this.createForm.value)
  }

}
