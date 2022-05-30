import { Injectable } from '@angular/core';
import {Config} from "../config/main";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  /**
   * Configurações do sistema.
   */
  private config: Config = new Config

  constructor(private http: HttpClient) { }

  getHorariosQuadra(): Observable<any>{
    return this.http.get(this.config.get('urlServiceBackend') + 'agenda/horarios')
  }
}
