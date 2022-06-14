import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {usuario} from "../model/usuarios.model";
import {HttpClient} from "@angular/common/http";
import {Config} from "../config/main";
import {LocalStorageService} from "../services/local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class PerfilResolver implements Resolve<usuario[]> {

  /**
   * Configurações do sistema.
   */
  private config: Config = new Config

  constructor(private http: HttpClient,
              private localStorage: LocalStorageService) {
  }

  resolve(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<usuario[]> {
    return this.http.get<usuario[]>(this.config.get('urlServiceBackend') + `usuario/buscar/` + this.localStorage.get('usuario').id)
  }
}
