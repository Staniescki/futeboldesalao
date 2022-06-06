import { Injectable } from '@angular/core';
import {Config} from "../config/main";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  /**
   * Configurações do sistema.
   */
  private config: Config = new Config

  public salvar: BehaviorSubject<any> = new BehaviorSubject<any>(null)

  constructor(private http: HttpClient) { }

  getHorariosQuadra(): Observable<any>{
    return this.http.get(this.config.get('urlServiceBackend') + 'agenda/horarios')
  }

  salvarPartida(data: any): Observable<any> {
    return this.http.post(this.config.get('urlServiceBackend') + 'agenda/criar', data)
  }

  editarPartida(data: any): Observable<any> {
    return this.http.post(this.config.get('urlServiceBackend') + `agenda/editar`, data)
  }

  excluirPartida(id: any): Observable<any> {
    return this.http.delete(this.config.get('urlServiceBackend') + `agenda/deletar/${id}`)
  }

}
