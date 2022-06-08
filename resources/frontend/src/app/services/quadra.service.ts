import { Injectable } from '@angular/core';
import {Config} from "../config/main";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class QuadraService {

  /**
   * Configurações do sistema.
   */
  private config: Config = new Config

  constructor(private http: HttpClient) { }

  getQuadras(): Observable<any> {
    return this.http.get(this.config.get('urlServiceBackend') + `quadra/listar`)
  }
}
