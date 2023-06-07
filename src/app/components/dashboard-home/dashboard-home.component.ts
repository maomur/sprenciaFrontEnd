import { Component } from '@angular/core';
import { Comentario } from 'src/app/interfaces/comentario.interface';
import { Curso } from 'src/app/interfaces/curso.interface';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { ComentariosService } from 'src/app/services/comentarios.service';
import { CursosService } from 'src/app/services/cursos.service';
import { UsuarioService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent {

  public cursos: Curso[] = [];
  public usuarios: Usuario[] = [];
  public comentarios: Comentario[] = [];
  public countCursos!: number;
  public countUsuarios!: number;
  public countComentario!: number;

  constructor(private cursosService: CursosService, private usuariosService: UsuarioService, private comentariosService: ComentariosService) { }

  async ngOnInit() {
    this.cursos = await this.cursosService.getAllUnlimited();
    this.countCursos = this.cursos.length;
    this.usuarios = await this.usuariosService.getAll();
    this.countUsuarios = this.usuarios.length;
    this.comentarios = await this.comentariosService.getAll();
    this.countComentario = this.comentarios.length;
  }



}
