import { Injectable } from '@angular/core';
import {Config} from "../config/main";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JwtServiceService {

  /**
   * Configurações do sistema.
   */
  private config: Config = new Config

  constructor(private http: HttpClient) { }

  login(data: any) {
    console.log(this.http.post(this.config.get('urlServiceBackend') + 'auth/login', data))
    return this.http.post(this.config.get('urlServiceBackend') + 'auth/login', data)
  }
}
