import { Component } from '@angular/core';
import { Curso } from 'src/app/interfaces/curso.interface';
import { CursosService } from 'src/app/services/cursos.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public lastCursos!: Curso[];
  public cursos: Curso[] = [];
  public categorias: any[] = [];




  constructor(private CursosService: CursosService) {
  }

  async ngOnInit() {
    this.lastCursos = await this.CursosService.getLastCourses();
    this.cursos = await this.CursosService.getAll();
    //this.categorias = await this.CursosService.getByCategory()

  }


  //TO DO
  recogerCategoria($event: any) {
    console.log($event.target.value)
    this.cursos.forEach(element => {
      console.log(element.categoria)
    });
  }

  recogerCiudad($event: any) {
    console.log($event.target.value)
  }

  recogerHorario($event: any) {
    console.log($event.target.value)
  }

}
