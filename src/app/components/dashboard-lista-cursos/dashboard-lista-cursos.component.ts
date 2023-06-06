import { Component } from '@angular/core';
import { Curso } from 'src/app/interfaces/curso.interface';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-dashboard-lista-cursos',
  templateUrl: './dashboard-lista-cursos.component.html',
  styleUrls: ['./dashboard-lista-cursos.component.css']
})
export class DashboardListaCursosComponent {

  public cursos: Curso[] = [];

  constructor(private CursosService: CursosService) { }

  async ngOnInit() {
    this.cursos = await this.CursosService.getAll();
  }

}
