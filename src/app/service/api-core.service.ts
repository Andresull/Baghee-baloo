import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, numberAttribute } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { environment } from 'src/environments/environment.development';
import { Persona } from '../models/persona.model';
const baseUrl = `${environment.apiurl}/api/persona`;

@Injectable({
  providedIn: 'root'
})
export class ApiCoreService {

  constructor(private http:HttpClient) {}

  get(id?:number, numDocumento?: string ):Observable <Persona> {

    let queryString = new HttpParams();

    if(id){
      queryString = queryString.append("id", id);
    }
    if(numDocumento){
      queryString = queryString.append("numDocumento",numDocumento);
     }

     console.log(queryString);
    return this.http.get<Persona>(baseUrl+'/GetBuscarPersona', {params: queryString});
  }

}






//   constructor(private http: HttpClient) { }

//   // Realiza una solicitud HTTP GET y maneja errores
//   get(): Observable<Person[]> {
//     return this.http.get<Person[]>(baseUrl).pipe(
//       catchError(error => {
//         console.error('Error en la solicitud HTTP:', error);
//         return throwError(error);
//       })
//     );
//   }
// }

// interface Person {
//   // Define la estructura de un objeto Persona si es conocida
//   id: number;
//   name: string;
//   // Otros campos
// }
