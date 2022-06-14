import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Config} from "../config/main";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JogadorService {

  /**
   * Configurações do sistema.
   */
  private config: Config = new Config

  constructor(private http: HttpClient) { }

  buscarUsuario(id: any): Observable<any> {
    return this.http.get<any>(this.config.get('urlServiceBackend') + `usuario/buscar/${id}`)
  }
}
