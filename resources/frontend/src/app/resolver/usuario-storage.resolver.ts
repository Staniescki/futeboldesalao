import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {LocalStorageService} from "../services/local-storage.service";
import {Config} from "../config/main";

@Injectable({
  providedIn: 'root'
})
export class UsuarioStorageResolver implements Resolve<any> {

   config = new Config();

  constructor(private localStorage: LocalStorageService,
              private http: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.http.get(this.config.get('urlServiceBackend' + `auth/me`))
  }
}
