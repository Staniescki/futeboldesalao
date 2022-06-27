import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {Jogadores} from "../model/jogadores.model";
import {HttpClient} from "@angular/common/http";
import {Config} from "../config/main";

@Injectable({
  providedIn: 'root'
})
export class NomeJogadoresResolver implements Resolve<any> {

  constructor(private http: HttpClient) {
  }
  config = new Config();
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.http.get<Jogadores>(this.config.get('urlServiceBackend') + 'user/buscar_todos', {observe: 'response'})
  }
}
