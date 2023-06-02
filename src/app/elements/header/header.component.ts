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
  termn: string = "";


  constructor(private cursosService: CursosService, private router: Router, private route: ActivatedRoute) {

    // this.route.params.subscribe(async params => {
    //   let nombre = params['nombre'];
    //   return nombre
    // })

  }


  async searchWord() {
    this.cursos = await this.cursosService.getAll()
    this.cursos = await this.cursos.filter(item => {
      if (item.nombre.toLowerCase().includes(this.termn.toLowerCase())) {
        return true
      } else {
        return false
      }
    })
  }


}
