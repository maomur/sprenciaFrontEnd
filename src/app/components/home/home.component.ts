import { Component, Renderer2 } from '@angular/core';
import { Curso } from 'src/app/interfaces/curso.interface';
import { FiltrosService } from 'src/app/services/filtros.service';
import { CursosService } from 'src/app/services/cursos.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public lastCursos!: Curso[];
  public curso!: string;
  public cursos: Curso[] = [];

  public categoria!: string;
  public categorias: any[] = [];

  public ciudad!: string;
  public ciudades: any[] = [];

  public horario!: string;
  public horarios: any[] = [];

  public cursosCategoria: Curso[] = [];
  public cursosCiudad: Curso[] = [];
  public cursosHorario: Curso[] = []

  public labelOrdenar: string = "Menor";





  constructor(private CursosService: CursosService, private FiltrosService: FiltrosService, private renderer: Renderer2) {
  }

  async ngOnInit() {
    this.lastCursos = await this.CursosService.getLastCourses();
    this.cursos = await this.CursosService.getAll();
    this.categorias = await this.FiltrosService.getCategories();
    this.ciudades = await this.FiltrosService.getCities();
    this.horarios = await this.FiltrosService.getHorarios();

  }

  async recogerCategoria($event: any) {
    this.categoria = $event.target.value;
    if (this.categoria == "categoria") {
      this.cursos = this.lastCursos;
      return
    } else {
      this.cursosCategoria = await this.FiltrosService.getCoursesCategory(this.categoria);
      this.cursos = this.cursosCategoria;
    }
  }

  async recogerCiudad($event: any) {
    this.ciudad = $event.target.value;
    if (this.ciudad == "ciudad") {
      this.cursos = this.lastCursos
    } else {
      this.cursosCiudad = await this.FiltrosService.getCoursesByCity(this.ciudad);
      this.cursos = this.cursosCiudad;
    }
  }

  async recogerHorario($event: any) {
    this.horario = $event.target.value;
    if (this.horario == "horario") {
      this.cursos = this.lastCursos
    } else {
      this.cursosHorario = await this.FiltrosService.getCoursesByHorarios(this.horario);
      this.cursos = this.cursosHorario;
    }
  }

  ordenAlterno() {
    if (this.labelOrdenar === "Mayor") {
      this.cursos.sort((a, b) => a.precio - b.precio)
      this.labelOrdenar = "Menor"
    } else {
      this.cursos.sort((a, b) => b.precio - a.precio);
      this.labelOrdenar = "Mayor";
    }
  }

  ordenarPrecio() {
    this.cursos.sort((a, b) => a.precio - b.precio)
  }

  scrollToTop() {
    const element = document.getElementById('top');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }


}
