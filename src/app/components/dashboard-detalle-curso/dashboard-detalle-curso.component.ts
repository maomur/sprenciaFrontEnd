import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/interfaces/curso.interface';
import { CursosService } from 'src/app/services/cursos.service';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard-detalle-curso',
  templateUrl: './dashboard-detalle-curso.component.html',
  styleUrls: ['./dashboard-detalle-curso.component.css']
})
export class DashboardDetalleCursoComponent {

  public miCurso: Curso | any;
  public cursos: Curso[] = []

  constructor(private router: Router, private route: ActivatedRoute, private CursosService: CursosService, private location: Location) { }

  ngOnInit(): void {
    this.route.params.subscribe(async params => {
      let id = parseInt(params['id']);
      this.miCurso = await this.CursosService.getById(id);

    })
  }

  //Eliminar Curso
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
      this.router.navigate(['/dashboard/listar-cursos'])
    }
  }

  //Retroceder historial de navegación
  goBack(): void {
    this.location.back()
  }


}
