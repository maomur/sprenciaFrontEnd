import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { FormularioCursoComponent } from './components/formulario-curso/formulario-curso.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { RecuperarClaveComponent } from './components/recuperar-clave/recuperar-clave.component';

const routes: Routes = [
  // { path: "", pathMatch: 'full', redirectTo: '/home' },
  { path: "", component: HomeComponent },
  { path: "sobre-nosotros", component: SobreNosotrosComponent },
  { path: "cursos", component: CursosComponent },
  { path: "formulario-curso", component: FormularioCursoComponent },
  { path: "usuarios", component: UsuariosComponent },
  { path: "perfil", component: PerfilComponent },
  { path: "login", component: LoginComponent },
  { path: "registro", component: RegistroComponent },
  { path: "contacto", component: ContactoComponent },
  { path: "recuperar-clave", component: RecuperarClaveComponent },
  { path: "cursos", component: CursosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
