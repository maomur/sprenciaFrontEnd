import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/interfaces/curso.interface';
import { ComentariosService } from 'src/app/services/comentarios.service';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  miCurso: Curso | any;
  opiniones: any;


  constructor(private router: Router, private route: ActivatedRoute, private CursosService: CursosService, private ComentarioService: ComentariosService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(async params => {
      let id = parseInt(params['id']);
      this.miCurso = await this.CursosService.getById(id);
      this.opiniones = await this.ComentarioService.getCommentByCursoId(id);
      console.log('OPINIONES', this.opiniones)

    })



  }
}
