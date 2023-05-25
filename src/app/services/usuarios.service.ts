import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario.interface';
import { lastValueFrom, Observable } from 'rxjs'

@Injectable({
    providedIn: 'root'
})

export class UsuarioService {
    baseUrl: string = 'https://rickandmortyapi.com/api/character';
    constructor(private httpClient: HttpClient) {
    }
    getByPage(pUrl: string = this.baseUrl): Promise<any> {
        return lastValueFrom(this.httpClient.get<any>(pUrl))
    }
    mostrarInfo(mensaje: string) {
        alert(mensaje)
    }
}