import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiCoreService } from 'src/app/service/api-core.service';
import { Banco, Persona } from 'src/app/models/persona.model';
@Component({
  selector: 'app-sisben-search',
  templateUrl: './sisben-search.component.html',
})
export class SisbenSearchComponent implements OnInit {

modeloPersona:Persona = new Persona();
personaBanco:Banco = new Banco();
documento!: string;
sisbenData: any;
bancarizadoData: any;
mensaje: string = ''; // Mensaje en blanco.

constructor(private http: HttpClient,
  private apiServiceCore: ApiCoreService) {}

searchSisben() {

 console.log("entra");

  this.apiServiceCore.get(undefined,this.documento).subscribe((data: Persona) => {
    this.modeloPersona = data;
  });

}

ngOnInit(): void {
  throw new Error('Method not implemented.');
}

getSisbenData(documento: string): Observable<any> {
  return this.http.get('/api/Persona', { params: { Documento: documento } });
}

getBancarizadoData(documento: string): Observable<any> {
  return this.http.get('/api/PersonaBanco', { params: { Documento: documento } });
}










 }

