import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario.interface';
import { lastValueFrom, Observable } from 'rxjs'

@Injectable({
    providedIn: 'root'
})

export class UsuarioService {
    baseUrl: string = 'http://localhost:3330/api/users/';

    constructor(private httpClient: HttpClient) { }


    //Obtener todos los usuarios
    // getAll(): Promise<Usuario[]> {
    //     const httpOptions = {
    //         headers: new HttpHeaders({
    //             'Authorization': localStorage.getItem('token')!
    //         })
    //     }
    //     return lastValueFrom(this.httpClient.get<Usuario[]>(this.baseUrl, httpOptions))
    // }

    getAll(): Promise<Usuario[]> {
        return lastValueFrom(this.httpClient.get<Usuario[]>(this.baseUrl))
    }

    //Iniciar sesión
    login(pForm: any): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })

        }
        return this.httpClient.post<any>(this.baseUrl + 'login', pForm, httpOptions)
    }

    register(pForm: any): Promise<any> {
        return lastValueFrom(
            this.httpClient.post<any>(this.baseUrl + 'create', pForm)
        )
    }

    //Crear usuario
    create(pData: FormData): Promise<Usuario[]> {
        return lastValueFrom(this.httpClient.post<Usuario[]>(this.baseUrl + 'create', pData))
    }

    // register(pForm: any): Observable<any> {
    //     const httpOptions = {
    //         headers: new HttpHeaders({
    //             'Content-Type': 'aplication/json'
    //         })
    //     }
    //     return this.httpClient.post<any>(this.baseUrl + 'create', pForm, httpOptions)
    // }


}

