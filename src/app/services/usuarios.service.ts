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
    getAll(): Promise<Usuario[]> {

        const httpOptions = {
            headers: new HttpHeaders(
                { authorization: localStorage.getItem('token')! }
            )
        }
        return lastValueFrom(this.httpClient.get<Usuario[]>(this.baseUrl, httpOptions))
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

    //Registro de usuarios
    register(pForm: any): Promise<any> {
        return lastValueFrom(
            this.httpClient.post<any>(this.baseUrl + 'create/', pForm)
        )
    }

    //Crear usuario
    create(pData: FormData): Promise<any> {
        const httpOptions = {
            headers: new HttpHeaders(
                { authorization: localStorage.getItem('token')! }
            )
        }
        return lastValueFrom(this.httpClient.post<any>(this.baseUrl + 'create', pData, httpOptions))
    }

    //Eliminar un usuario
    deleteUserById(id: number) {
        const httpOptions = {
            headers: new HttpHeaders(
                { authorization: localStorage.getItem('token')! }
            )
        }
        return lastValueFrom(this.httpClient.get<any>(this.baseUrl + 'delete/' + id, httpOptions))
    }

    //Obtener un usuario por ID
    getUserById(id: number): Promise<any> {
        return lastValueFrom(this.httpClient.get<any>(this.baseUrl + id))
    }

    //Actualizar un usuario por Id
    updateUserById(id: number): Promise<any> {
        const httpOptions = {
            headers: new HttpHeaders(
                { authorization: localStorage.getItem('token')! }
            )
        }
        return lastValueFrom(this.httpClient.put<any>(this.baseUrl + 'update/' + id, httpOptions))
    }
}

