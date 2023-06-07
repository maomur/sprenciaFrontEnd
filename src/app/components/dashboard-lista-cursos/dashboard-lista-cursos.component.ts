import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from 'src/app/interfaces/curso.interface';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-dashboard-lista-cursos',
  templateUrl: './dashboard-lista-cursos.component.html',
  styleUrls: ['./dashboard-lista-cursos.component.css']
})
export class DashboardListaCursosComponent {

  public cursos: Curso[] = [];
  @Output() cursoEliminado: EventEmitter<string>;


  constructor(private CursosService: CursosService) {
    this.cursoEliminado = new EventEmitter();
  }


  async ngOnInit() {
    this.cursos = await this.CursosService.getAll();
  }

  async deleteCourse(id: number) {
    console.log('ID A BORRAR', id)
    const response = await this.CursosService.deleteCoursebyId(id);

    console.log(response)
    if (response.affectedRows) {
      alert('CLIENTE BORRADO CON ÉXITO');
      this.cursoEliminado.emit('eliminado')
    }
  }

}
