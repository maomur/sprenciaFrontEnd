import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { CursoComponent } from './components/curso/curso.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { FormularioCursoComponent } from './components/formulario-curso/formulario-curso.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ComentariosService } from './services/comentarios.service';
import { HeaderComponent } from './elements/header/header.component';
import { FooterComponent } from './elements/footer/footer.component';
import { BannerComponent } from './elements/banner/banner.component';
import { FaqsComponent } from './elements/faqs/faqs.component';
import { HttpClientModule } from '@angular/common/http';
import { CallToActionComponent } from './elements/call-to-action/call-to-action.component';
import { SobreSprenciaComponent } from './elements/sobre-sprencia/sobre-sprencia.component';
import { TestimoniosComponent } from './elements/testimonios/testimonios.component';
import { CallToActionDosComponent } from './elements/call-to-action-dos/call-to-action-dos.component';
import { CategoriasComponent } from './elements/categorias/categorias.component';
import { LoginUsersComponent } from './elements/login-users/login-users.component';
import { PoliticasComponent } from './elements/politicas/politicas.component';
import { RecuperarClaveComponent } from './components/recuperar-clave/recuperar-clave.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    CursoComponent,
    LoginComponent,
    HomeComponent,
    SobreNosotrosComponent,
    PerfilComponent,
    FormularioCursoComponent,
    UsuariosComponent,
    RegistroComponent,
    ContactoComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    FaqsComponent,
    CallToActionComponent,
    SobreSprenciaComponent,
    TestimoniosComponent,
    CallToActionDosComponent,
    CategoriasComponent,
    LoginUsersComponent,
    PoliticasComponent,
    RecuperarClaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ComentariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
