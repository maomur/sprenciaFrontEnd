import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Comentario } from '../interfaces/comentario.interface';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  private baseUrl: string = 'https://backend.sprenciaproject.liveroad.us/api/comments/';


  constructor(private httpClient: HttpClient) { }

  //Crear Comentario
  create(pData: FormData): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders(
        { authorization: localStorage.getItem('token')! }
      )
    }
    return lastValueFrom(this.httpClient.post<any>(this.baseUrl + 'create', pData, httpOptions))
  }

  //Obtener todos los Comentarios
  getAll(): Promise<Comentario[]> {
    const httpOptions = {
      headers: new HttpHeaders(
        { authorization: localStorage.getItem('token')! }
      )
    }
    return lastValueFrom(this.httpClient.get<Comentario[]>(this.baseUrl, httpOptions))
  }

  //Eliminar Comentario por Id
  deleteCommById(id: number) {
    const httpOptions = {
      headers: new HttpHeaders(
        { authorization: localStorage.getItem('token')! }
      )
    }
    return lastValueFrom(this.httpClient.get<any>(this.baseUrl + 'delete/' + id, httpOptions))
  }

  //Ver comentario por ID
  getById(id: string) {
    return lastValueFrom(this.httpClient.get<any>(this.baseUrl + id))
  }

  //Ver comentario por Curso
  getCommentByCursoId(idCurso: number): Promise<any> {
    return lastValueFrom(this.httpClient.get<any>(this.baseUrl + 'curso/' + idCurso))
  }

  //Editar comentario
  editCommentById(id: string, formValue: any) {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Authorization': localStorage.getItem('token')!,
          'Content-Type': 'application/json'
        })
    }
    return lastValueFrom(this.httpClient.put<any>(`${this.baseUrl}update/${id}`, formValue, httpOptions))
  }



}
