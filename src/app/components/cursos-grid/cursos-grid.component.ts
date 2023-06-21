import { Component, Renderer2 } from '@angular/core';
import { Curso } from 'src/app/interfaces/curso.interface';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-cursos-grid',
  templateUrl: './cursos-grid.component.html',
  styleUrls: ['./cursos-grid.component.css']
})
export class CursosGridComponent {

  public cursos!: Curso[];

  constructor(private CursosService: CursosService, private renderer: Renderer2) { }

  async ngOnInit() {
    this.cursos = await this.CursosService.getAllUnlimited()

  }

  scrollToTop() {
    const element = document.getElementById('top');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}


