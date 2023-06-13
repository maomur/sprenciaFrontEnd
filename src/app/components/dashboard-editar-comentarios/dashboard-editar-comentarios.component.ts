import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Comentario } from 'src/app/interfaces/comentario.interface';
import { ComentariosService } from 'src/app/services/comentarios.service';

@Component({
  selector: 'app-dashboard-editar-comentarios',
  templateUrl: './dashboard-editar-comentarios.component.html',
  styleUrls: ['./dashboard-editar-comentarios.component.css']
})
export class DashboardEditarComentariosComponent implements OnInit {

  public miComentario: Comentario | any;

  createForm: FormGroup;

  constructor(private router: Router, private CommentariosService: ComentariosService, private route: ActivatedRoute) {

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
    })
  }

  async onSubmit() {
    console.log('ONSUBMIT')
    console.log('Comentario', this.miComentario)
  }

}
