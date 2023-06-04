import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursoComponent } from './components/curso/curso.component';
import { HomeComponent } from './components/home/home.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { FormularioCursoComponent } from './components/formulario-curso/formulario-curso.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
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
import { CrearCursoComponent } from './components/crear-curso/crear-curso.component';
import { CursosCategoriaComponent } from './components/cursos-resultado/cursos-categoria.component';
import { CursosGridComponent } from './components/cursos-grid/cursos-grid.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CursoComponent,
    HomeComponent,
    SobreNosotrosComponent,
    PerfilComponent,
    FormularioCursoComponent,
    UsuariosComponent,
    RegistroComponent,
    ContactoComponent,
    HeaderComponent,
    FooterComponent,
    LoginUsersComponent,
    PoliticasComponent,
    RecuperarClaveComponent,
    CrearCursoComponent,
    CursosCategoriaComponent,
    CursosGridComponent,
    DashboardComponent,
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
