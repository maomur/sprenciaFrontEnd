import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private baseUrl: string = 'https://backend.sprenciaproject.liveroad.us/api/categories/'

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return lastValueFrom(this.httpClient.get<any>(this.baseUrl))
  }




}
