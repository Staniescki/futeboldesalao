import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private  http: HttpClient) { }

  buscarCep(cep: any): Observable<any> {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
  }
}
