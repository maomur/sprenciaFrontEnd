import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Curso } from '../interfaces/curso.interface';

@Injectable({
  providedIn: 'root'
})
export class FiltrosService {

  private baseUrlCategorias: string = 'http://localhost:3330/api/categories/'

  private baseUrlCiudades: string = 'http://localhost:3330/api/ciudades/'

  private baseUrlHorarios: string = 'http://localhost:3330/api/horarios/'


  constructor(private httpClient: HttpClient) { }

  //Ver todas las categorías
  getCategories(): Promise<any[]> {
    return lastValueFrom(this.httpClient.get<any[]>(this.baseUrlCategorias))
  }

  //Filtrar Cursos por Categoría
  getCoursesCategory(categoria: string): Promise<Curso[]> {
    return lastValueFrom(this.httpClient.get<Curso[]>(this.baseUrlCategorias + categoria))
  }

  //Ver todas las Ciudades
  getCities(): Promise<any[]> {
    return lastValueFrom(this.httpClient.get<any[]>(this.baseUrlCiudades))
  }

  //Filtrar Cursos por Ciudad
  getCoursesByCity(ciudad: string): Promise<Curso[]> {
    return lastValueFrom(this.httpClient.get<Curso[]>(this.baseUrlCiudades + ciudad))
  }

  //Ver todos los Horarios
  getHorarios(): Promise<any[]> {
    return lastValueFrom(this.httpClient.get<any[]>(this.baseUrlHorarios))
  }

  //Ver Cursos por Horarios
  getCoursesByHorarios(horario: string): Promise<Curso[]> {
    return lastValueFrom(this.httpClient.get<Curso[]>(this.baseUrlHorarios + horario))
  }


}
