import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Comentario } from '../interfaces/comentario.interface';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  private baseUrl: string = 'http://localhost:3330/api/comments/';


  constructor(private httpClient: HttpClient) { }

  //Crear Curso
  create(pData: FormData): Promise<any> {
    return lastValueFrom(this.httpClient.post<any>(this.baseUrl + 'create', pData))
  }

  //Obtener todos los Comentarios
  getAll(): Promise<Comentario[]> {
    return lastValueFrom(this.httpClient.get<Comentario[]>(this.baseUrl))
  }

  //Eliminar Comentario por Id
  deleteCommById(id: number) {
    return lastValueFrom(this.httpClient.get<any>(this.baseUrl + 'delete/' + id))
  }

  //Ver comentario por ID
  getById(id: number): Promise<any[]> {
    return lastValueFrom(this.httpClient.get<any>(this.baseUrl + id))
  }

  //Ver comentario por Curso
  getCommentByCursoId(idCurso: number): Promise<any> {
    return lastValueFrom(this.httpClient.get<any>(this.baseUrl + 'curso/' + idCurso))
  }

  //Editar comentario
  editCommentById(idComentario: number) {
    const httpOptions = {
      headers: new HttpHeaders(
        { authorization: localStorage.getItem('token')! }
      )
    }
    return lastValueFrom(this.httpClient.post<any>(this.baseUrl + 'update/' + idComentario, httpOptions))
  }



}
