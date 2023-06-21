import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario.interface';
import { lastValueFrom, Observable } from 'rxjs'

@Injectable({
    providedIn: 'root'
})

export class UsuarioService {
    baseUrl: string = 'https://backend.sprenciaproject.liveroad.us/api/users/';

    code: EventEmitter<string> = new EventEmitter<string>();


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
    register(pData: FormData): Promise<any> {
        return lastValueFrom(this.httpClient.post<any>(this.baseUrl + 'register', pData))
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

    //Obtener un usuario por email
    getUserByEmail(email: string): Promise<any> {
        return lastValueFrom(this.httpClient.get<any>(this.baseUrl + 'searchUser/' + email))
    }


    //Obtener un email de un usuario
    getEmail(email: string): Promise<any> {
        return lastValueFrom(this.httpClient.get<any>(this.baseUrl + 'emailUser/' + email))
    }

    //Actualizar un usuario por Id
    updateUserById(id: number, formValue: any): Promise<any> {
        const httpOptions = {
            headers: new HttpHeaders(
                { authorization: localStorage.getItem('token')! }
            )
        }
        return lastValueFrom(this.httpClient.put<any>(this.baseUrl + 'update/' + id, formValue, httpOptions))
    }

    //Recuperar Clave
    resetPassword(formValue: any): Promise<any> {
        return lastValueFrom(this.httpClient.put<any>(`${this.baseUrl}/reset-password`, formValue))
    }
}

