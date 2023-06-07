import { Component } from '@angular/core';
import { Curso } from 'src/app/interfaces/curso.interface';
import { CursosService } from 'src/app/services/cursos.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-dashboard-lista-cursos',
  templateUrl: './dashboard-lista-cursos.component.html',
  styleUrls: ['./dashboard-lista-cursos.component.css']
})
export class DashboardListaCursosComponent {

  public cursos: Curso[] = [];


  constructor(private CursosService: CursosService) {
  }


  async ngOnInit() {
    this.cursos = await this.CursosService.getAll();
  }


  //Eliminar un Curso
  async deleteCourse(id: number) {
    const response = await this.CursosService.deleteCoursebyId(id);

    if (response.affectedRows) {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Usuario eliminado con éxito',
        timer: 4500
      })
      this.cursos = await this.CursosService.getAll();
    }
  }

}
