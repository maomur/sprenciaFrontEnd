import { Component, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/interfaces/curso.interface';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-cursos-categoria',
  templateUrl: './cursos-categoria.component.html',
  styleUrls: ['./cursos-categoria.component.css']
})
export class CursosCategoriaComponent {

  miCurso: Curso | any;
  miCategoria: string = "";


  constructor(private router: Router, private CursosService: CursosService, private route: ActivatedRoute, private renderer: Renderer2) {

    this.route.params.subscribe(async params => {
      let categoria = params['categoria'];
      this.miCurso = await this.CursosService.getByCategory(categoria);
      this.miCategoria = categoria;
    })


  }

  ngOnInit(): void {
    this.route.params.subscribe(async params => {
      let categoria = params['categoria'];
      this.miCurso = await this.CursosService.getByCategory(categoria);
      return categoria
    })
  }

  scrollToTop() {
    const element = document.getElementById('top');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
