import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { last, lastValueFrom } from 'rxjs';
import { Curso } from '../interfaces/curso.interface';


@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private baseUrl: string = 'http://localhost:3330/api/courses/';


  constructor(private httpClient: HttpClient) { }


  //Crear Curso


  //Obtener todos los cursos
  getAll(): Promise<Curso[]> {
    return lastValueFrom(this.httpClient.get<Curso[]>(this.baseUrl))
  }

  //Obtener últimos 10 cursos
  getLastCourses(): Promise<Curso[]> {
    return lastValueFrom(this.httpClient.get<Curso[]>(this.baseUrl + 'lastcourses'))
  }

  //Curso para buscador
  getSearchCourses(): Promise<Curso[]> {
    return lastValueFrom(this.httpClient.get<Curso[]>(this.baseUrl + 'search'))
  }

  //Obtener Curso por Id
  getById(id: number): Promise<Curso> {
    return lastValueFrom(this.httpClient.get<Curso>(this.baseUrl + 'course/' + id))
  }

  //Obtener Curso por Categorías
  getByCategory(categoria: string): Promise<Curso[]> {
    return lastValueFrom(this.httpClient.get<Curso[]>(this.baseUrl + categoria))
  }

}


