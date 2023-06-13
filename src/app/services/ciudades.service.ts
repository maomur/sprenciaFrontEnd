import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CiudadesService {

  private baseUrl: string = 'http://localhost:3330/api/ciudades/'

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return lastValueFrom(this.httpClient.get<any>(this.baseUrl))
  }


}
