import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CiudadesService {

  private baseUrl: string = 'https://backend.sprenciaproject.liveroad.us/api/ciudades/'

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return lastValueFrom(this.httpClient.get<any>(this.baseUrl))
  }


}
