import { Component } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { UsuarioService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard-lista-usuarios',
  templateUrl: './dashboard-lista-usuarios.component.html',
  styleUrls: ['./dashboard-lista-usuarios.component.css']
})
export class DashboardListaUsuariosComponent {

  public usuarios: Usuario[] = [];


  constructor(private UsuariosService: UsuarioService) { }

  async ngOnInit() {
    this.usuarios = await this.UsuariosService.getAll()
  }

  //Eliminar Usuario
  async deleteUser(id: number) {
    const response = await this.UsuariosService.deleteUserById(id);

    if (response.affectedRows) {

      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Usuario eliminado con éxito',
        showConfirmButton: false,
        timer: 4500
      })
      this.usuarios = await this.UsuariosService.getAll();
    }
  }

}
