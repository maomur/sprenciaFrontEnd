import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Comentario } from '../interfaces/comentario.interface';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  private baseUrl: string = 'http://localhost:3330/api/comments';


  constructor(private httpClient: HttpClient) { }

  //Obtener todos los Comentarios
  getAll(): Promise<Comentario[]> {
    return lastValueFrom(this.httpClient.get<Comentario[]>(this.baseUrl))
  }

}
