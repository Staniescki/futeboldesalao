import { Injectable } from '@angular/core';
import {Config} from "../config/main";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthService} from "./auth.service";
import {LocalStorageService} from "./local-storage.service";
import {TokenService} from "./token.service";

@Injectable({
  providedIn: 'root'
})
export class JwtServiceService {

  /**
   * Configurações do sistema.
   */
  private config: Config = new Config

  constructor(private http: HttpClient,
              private router: Router,
              private authService: AuthService,
              private tokenService: TokenService,
              private localStorageService: LocalStorageService
              ) { }

  login(data: any) {
    return this.http.post(this.config.get('urlServiceBackend') + 'auth/login', data)
  }

  logout() {
    this.tokenService.remove()
    this.authService.changeAuthStatus(false)
    /*this.empresaService.empresaSelecionada.next(null)*/
    this.localStorageService.remove('token')
    this.localStorageService.remove('empresa')
    this.localStorageService.set('usuario', null)
    this.localStorageService.remove('current_user')
    this.localStorageService.remove('aplicacao')
    this.localStorageService.remove('permissoes')
    this.localStorageService.remove('permissoesTotais')
    this.localStorageService.remove('senha_expirada')
    this.router.navigateByUrl('/login')
  }
}
