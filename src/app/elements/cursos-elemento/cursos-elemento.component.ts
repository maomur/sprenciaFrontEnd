import { Component } from '@angular/core';
import { Curso } from 'src/app/interfaces/curso.interface';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-cursos-elemento',
  templateUrl: './cursos-elemento.component.html',
  styleUrls: ['./cursos-elemento.component.css']
})
export class CursosElementoComponent {

  public cursos!: Curso[];

  constructor(private CursosService: CursosService) { }

  async ngOnInit() {
    this.cursos = await this.CursosService.getAll()

  }
}

