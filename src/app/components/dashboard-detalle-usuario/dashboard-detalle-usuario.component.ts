import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { UsuarioService } from 'src/app/services/usuarios.service';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard-detalle-usuario',
  templateUrl: './dashboard-detalle-usuario.component.html',
  styleUrls: ['./dashboard-detalle-usuario.component.css']
})
export class DashboardDetalleUsuarioComponent {

  public usuario: Usuario | any;
  public usuarios: Usuario[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private UsuariosService: UsuarioService, private location: Location) { }

  ngOnInit(): void {
    this.route.params.subscribe(async params => {
      let id = parseInt(params['id']);
      this.usuario = await this.UsuariosService.getUserById(id);
    })
  }

  //Eliminar Usuario
  async deleteUser(id: number) {
    const response = await this.UsuariosService.deleteUserById(id);

    if (response.affectedRows) {

      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Usuario eliminado con éxito',
        timer: 4500
      })
      this.usuarios = await this.UsuariosService.getAll();
    }
  }

  //Retroceder historial de navegación
  goBack(): void {
    this.location.back()
  }

}
