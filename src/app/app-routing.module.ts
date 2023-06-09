import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { FormularioCursoComponent } from './components/formulario-curso/formulario-curso.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { RecuperarClaveComponent } from './components/recuperar-clave/recuperar-clave.component';
import { CursoComponent } from './components/curso/curso.component';
import { CursosCategoriaComponent } from './components/cursos-resultado/cursos-categoria.component';
import { CursosGridComponent } from './components/cursos-grid/cursos-grid.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardEditarCursoComponent } from './components/dashboard-editar-curso/dashboard-editar-curso.component';
import { DashboardEditarUsuarioComponent } from './components/dashboard-editar-usuario/dashboard-editar-usuario.component';
import { DashboardNuevoCursoComponent } from './components/dashboard-nuevo-curso/dashboard-nuevo-curso.component';
import { DashboardListaCursosComponent } from './components/dashboard-lista-cursos/dashboard-lista-cursos.component';
import { DashboardListaUsuariosComponent } from './components/dashboard-lista-usuarios/dashboard-lista-usuarios.component';
import { DashboardCrearUsuarioComponent } from './components/dashboard-crear-usuario/dashboard-crear-usuario.component';
import { DashboardListarComentariosComponent } from './components/dashboard-listar-comentarios/dashboard-listar-comentarios.component';
import { DashboardEditarComentariosComponent } from './components/dashboard-editar-comentarios/dashboard-editar-comentarios.component';
import { DashboardCrearComentarioComponent } from './components/dashboard-crear-comentario/dashboard-crear-comentario.component';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { DashboardDetalleCursoComponent } from './components/dashboard-detalle-curso/dashboard-detalle-curso.component';
import { DashboardDetalleUsuarioComponent } from './components/dashboard-detalle-usuario/dashboard-detalle-usuario.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "sobre-nosotros", component: SobreNosotrosComponent },
  { path: "formulario-curso", component: FormularioCursoComponent },
  { path: "usuarios", component: UsuariosComponent },
  { path: "perfil", component: PerfilComponent },
  { path: "registro", component: RegistroComponent },
  { path: "contacto", component: ContactoComponent },
  { path: "recuperar-clave", component: RecuperarClaveComponent },
  { path: "curso/:id", component: CursoComponent },
  { path: "resultado-categoria/:categoria", component: CursosCategoriaComponent },
  { path: 'cursos', component: CursosGridComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'listar-cursos', component: DashboardListaCursosComponent },
      { path: 'editar-curso', component: DashboardEditarCursoComponent },
      { path: 'nuevo-curso', component: DashboardNuevoCursoComponent },
      { path: 'editar-curso/:id', component: DashboardEditarCursoComponent },
      { path: 'listar-usuarios', component: DashboardListaUsuariosComponent },
      { path: 'crear-usuarios', component: DashboardCrearUsuarioComponent },
      { path: 'editar-usuarios', component: DashboardEditarUsuarioComponent },
      { path: 'listar-comentarios', component: DashboardListarComentariosComponent },
      { path: 'crear-comentarios', component: DashboardCrearComentarioComponent },
      { path: 'editar-comentarios', component: DashboardEditarComentariosComponent },
      { path: 'home', component: DashboardHomeComponent },
      { path: 'detalle-curso/:id', component: DashboardDetalleCursoComponent },
      { path: 'detalle-usuario/:id', component: DashboardDetalleUsuarioComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
