import { Component } from '@angular/core';
import { Curso } from 'src/app/interfaces/curso.interface';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {

  public cursos!: Curso[];

  constructor(private CursosService: CursosService) { }

  async ngOnInit() {
    this.cursos = await this.CursosService.getAll()
  }

}
