// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor,
// } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import { LoginGuard } from '../guards/login.guard';


// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//   constructor(private authService: LoginGuard) { }

//   intercept(
//     request: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     // Clona la solicitud original y agrega el encabezado de autorización si el token está presente
//     const token = this.authService.canActivate()
//     if (token) {
//       request = request.clone({
//         setHeaders: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//     }

//     return next.handle(request).pipe(
//       catchError((error) => {
   
//         if (error.status === 401) {
//           this.authService.logout();
//         }

//         return throwError(error);
//       })
//     );
//   }
// }
