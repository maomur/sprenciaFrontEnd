import { Component } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { UsuarioService } from 'src/app/services/usuarios.service';

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

}
