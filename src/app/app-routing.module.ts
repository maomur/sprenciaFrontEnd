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
import { CrearCursoComponent } from './components/crear-curso/crear-curso.component';
import { CursosCategoriaComponent } from './components/cursos-resultado/cursos-categoria.component';
import { CursosGridComponent } from './components/cursos-grid/cursos-grid.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

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
  { path: "crear-curso", component: CrearCursoComponent },
  { path: "resultado-categoria/:categoria", component: CursosCategoriaComponent },
  { path: 'cursos', component: CursosGridComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
