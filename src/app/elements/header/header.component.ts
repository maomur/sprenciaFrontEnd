import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/interfaces/curso.interface';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public cursos: Curso[] = []
  public termn: string = "";
  public contadorResultados: number = 0;


  constructor(private cursosService: CursosService, private router: Router, private route: ActivatedRoute) {
  }

  async searchWord() {
    this.cursos = await this.cursosService.getSearchCourses()
    this.cursos = await this.cursos.filter(item => {
      if (item.nombre.toLowerCase().includes(this.termn.toLowerCase())) {
        return true
      } else {
        return false
      }
    })
    this.contadorResultados = Object.keys(this.cursos).length;
  }


}
