import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursoComponent } from './components/curso/curso.component';
import { HomeComponent } from './components/home/home.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ComentariosService } from './services/comentarios.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginUsersComponent } from './components/login-users/login-users.component';
import { PoliticasComponent } from './components/politicas/politicas.component';
import { RecuperarClaveComponent } from './components/recuperar-clave/recuperar-clave.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CursosCategoriaComponent } from './components/cursos-resultado/cursos-categoria.component';
import { CursosGridComponent } from './components/cursos-grid/cursos-grid.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardMenuLateralComponent } from './components/dashboard-menu-lateral/dashboard-menu-lateral.component';
import { DashboardListaCursosComponent } from './components/dashboard-lista-cursos/dashboard-lista-cursos.component';
import { DashboardEditarCursoComponent } from './components/dashboard-editar-curso/dashboard-editar-curso.component';
import { DashboardListaUsuariosComponent } from './components/dashboard-lista-usuarios/dashboard-lista-usuarios.component';
import { DashboardEditarUsuarioComponent } from './components/dashboard-editar-usuario/dashboard-editar-usuario.component';
import { DashboardCrearUsuarioComponent } from './components/dashboard-crear-usuario/dashboard-crear-usuario.component';
import { DashboardListarComentariosComponent } from './components/dashboard-listar-comentarios/dashboard-listar-comentarios.component';
import { DashboardEditarComentariosComponent } from './components/dashboard-editar-comentarios/dashboard-editar-comentarios.component';
import { DashboardNuevoCursoComponent } from './components/dashboard-nuevo-curso/dashboard-nuevo-curso.component';
import { DashboardCrearComentarioComponent } from './components/dashboard-crear-comentario/dashboard-crear-comentario.component';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { DashboardDetalleCursoComponent } from './components/dashboard-detalle-curso/dashboard-detalle-curso.component';
import { DashboardDetalleUsuarioComponent } from './components/dashboard-detalle-usuario/dashboard-detalle-usuario.component';
import { Routes } from '@angular/router';
import { RecuperarClaveCodigoComponent } from './components/recuperar-clave-codigo/recuperar-clave-codigo.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [

]


@NgModule({
  declarations: [
    AppComponent,
    CursoComponent,
    HomeComponent,
    SobreNosotrosComponent,
    PerfilComponent,
    RegistroComponent,
    ContactoComponent,
    HeaderComponent,
    FooterComponent,
    LoginUsersComponent,
    PoliticasComponent,
    RecuperarClaveComponent,
    CursosCategoriaComponent,
    CursosGridComponent,
    DashboardComponent,
    DashboardMenuLateralComponent,
    DashboardListaCursosComponent,
    DashboardEditarCursoComponent,
    DashboardListaUsuariosComponent,
    DashboardEditarUsuarioComponent,
    DashboardCrearUsuarioComponent,
    DashboardListarComentariosComponent,
    DashboardEditarComentariosComponent,
    DashboardNuevoCursoComponent,
    DashboardCrearComentarioComponent,
    DashboardHomeComponent,
    DashboardDetalleCursoComponent,
    DashboardDetalleUsuarioComponent,
    RecuperarClaveCodigoComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ComentariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
