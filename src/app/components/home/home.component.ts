import { Component } from '@angular/core';
import { Curso } from 'src/app/interfaces/curso.interface';
import { CursosService } from 'src/app/services/cursos.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

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

  //Información Inicial

  // cursos: Curso[] = [
  //   {
  //     id: 1,
  //     nombre: "Curso de Administración de Redes Sociales",
  //     descripcion: "En este curso aprenderás a manejar las principales redes sociales (Instagram, Facebook, TikTok) y la forma de promocionar de manera efectiva, tus productos o servicios.",
  //     horario_inicio: "10:00am",
  //     horario_cierre: "1:00pm",
  //     foto1: "../../../assets/img/curso-de-creacion-de-webinars.jpg",
  //     foto2: "",
  //     foto3: "",
  //     precio: 120,
  //     estado: "activo",
  //     isDelete: "true",
  //   },
  //   {
  //     id: 2,
  //     nombre: "Crea tu Tienda Online",
  //     descripcion: "Aprende a utilizar herramientas digitales gratuitas para ofrecer un sin número de productos de terceros.",
  //     horario_inicio: "10:00am",
  //     horario_cierre: "1:00pm",
  //     foto1: "../../../assets/img/sprencia-curso-de-desarrollo-web.jpg",
  //     foto2: "",
  //     foto3: "",
  //     precio: 120,
  //     estado: "activo",
  //     isDelete: "true",
  //   },
  //   {
  //     id: 3,
  //     nombre: "Introducción a la Inteligencia Artificial",
  //     descripcion: "Con este curso aprenderás a utilizar herramientas de generación de contenidos así como de imágenes para utilizar en tus medios digitales",
  //     horario_inicio: "10:00am",
  //     horario_cierre: "1:00pm",
  //     foto1: "../../../assets/img/sprencia-curso-de-administracion-de-redes-sociales.jpg",
  //     foto2: "",
  //     foto3: "",
  //     precio: 120,
  //     estado: "activo",
  //     isDelete: "true",
  //   }
  // ];

  inputId: number = 0;
  inputNombreCurso: string = "";
  inputDescripcion: string = "";
  inputHorario_inicio: string = "";
  inputHorario_cierre: string = "";
  inputFoto1: string = "";
  inputFoto2: string = "";
  inputFoto3: string = "";
  inputPrecio: number = 0;
  inputEstado: string = "";
  inputIsDelete: string = "true";

}
