import { Component } from '@angular/core';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-cursos-elemento',
  templateUrl: './cursos-elemento.component.html',
  styleUrls: ['./cursos-elemento.component.css']
})
export class CursosElementoComponent {

  public cursos: any = [];

  constructor(private CursosService: CursosService) { }

  ngOnInit(): void {
    this.loadData()
  }

  public loadData() {
    this.CursosService.getCourses('http://localhost:3330/api/courses').subscribe(data => {
      console.log(data);
      this.cursos = data;
    })
  }

}
