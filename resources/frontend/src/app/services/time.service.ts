import { Injectable } from '@angular/core';
import {Config} from "../config/main";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  /**
   * Configurações do sistema.
   */
  private config: Config = new Config

  constructor(private http: HttpClient) { }

  criarTime(data: any): Observable<any>{
    return this.http.post(this.config.get('urlServiceBackend') + 'time/criar', data, {observe: 'response'})
  }
}
