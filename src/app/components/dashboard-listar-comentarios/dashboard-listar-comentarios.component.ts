import { Component } from '@angular/core';
import { Comentario } from 'src/app/interfaces/comentario.interface';
import { ComentariosService } from 'src/app/services/comentarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard-listar-comentarios',
  templateUrl: './dashboard-listar-comentarios.component.html',
  styleUrls: ['./dashboard-listar-comentarios.component.css']
})
export class DashboardListarComentariosComponent {

  public comentarios: Comentario[] = [];

  constructor(private ComentariosService: ComentariosService) { }
  async ngOnInit() {
    this.comentarios = await this.ComentariosService.getAll();
  }

  async deleteComm(id: number) {
    const response = await this.ComentariosService.deleteCommById(id);

    if (response.affectedRows) {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Comentario eliminado con éxito',
        timer: 4500
      })
      this.comentarios = await this.ComentariosService.getAll()
    }
  }

}
