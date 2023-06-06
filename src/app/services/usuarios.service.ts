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

    getAll(): Promise<Usuario[]> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': localStorage.getItem('token')!
            })
        }
        return lastValueFrom(this.httpClient.get<Usuario[]>(this.baseUrl, httpOptions))
    }

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

    // register(pForm: any): Observable<any> {
    //     const httpOptions = {
    //         headers: new HttpHeaders({
    //             'Content-Type': 'aplication/json'
    //         })
    //     }
    //     return this.httpClient.post<any>(this.baseUrl + 'create', pForm, httpOptions)
    // }


}

