import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/interfaces/curso.interface';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  miCurso: Curso | any;


  constructor(private router: Router, private route: ActivatedRoute, private CursosService: CursosService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(async params => {
      let id = parseInt(params['id']);
      this.miCurso = await this.CursosService.getById(id);
    })
  }
}
