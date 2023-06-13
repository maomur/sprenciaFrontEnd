import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private baseUrl: string = 'http://localhost:3330/api/categories/'

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return lastValueFrom(this.httpClient.get<any>(this.baseUrl))
  }




}
