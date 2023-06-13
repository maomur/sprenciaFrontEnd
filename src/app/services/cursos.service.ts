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
  create(pData: any): Promise<any> {
    return lastValueFrom(this.httpClient.post<any>(this.baseUrl + 'create', pData))
  }

  //Obtener todos los cursos Límite 12
  getAll(): Promise<Curso[]> {
    return lastValueFrom(this.httpClient.get<Curso[]>(this.baseUrl))
  }

  //Obtener todos los cursos
  getAllUnlimited(): Promise<Curso[]> {
    return lastValueFrom(this.httpClient.get<Curso[]>(this.baseUrl + "all"))
  }

  //Obtener últimos 10 cursos
  getLastCourses(): Promise<Curso[]> {
    return lastValueFrom(this.httpClient.get<Curso[]>(this.baseUrl + 'lastcourses'))
  }

  //Curso para buscador
  getSearchCourses(termn: string): Promise<Curso[]> {
    return lastValueFrom(this.httpClient.get<Curso[]>(this.baseUrl + 'search/' + termn))
  }

  //Obtener Curso por Id
  getById(id: number): Promise<Curso> {
    return lastValueFrom(this.httpClient.get<Curso>(this.baseUrl + 'course/' + id))
  }

  //Obtener Curso por Categorías
  getByCategory(categoria: string): Promise<Curso[]> {
    return lastValueFrom(this.httpClient.get<Curso[]>(this.baseUrl + categoria))
  }

  //Eliminar Curso por ID
  deleteCoursebyId(id: number) {
    const httpOptions = {
      headers: new HttpHeaders(
        { authorization: localStorage.getItem('token')! }
      )
    }
    return lastValueFrom(this.httpClient.get<any>(this.baseUrl + 'delete/' + id, httpOptions))
  }

  //Actualizar un Curso por ID
  updateCourseById(pData: FormData): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders(
        { authorization: localStorage.getItem('token')! }
      )
    }
    return lastValueFrom(this.httpClient.post<any>(this.baseUrl + 'update', pData, httpOptions))
  }

}



