import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Config } from '../config/main'
import {BehaviorSubject, Observable} from 'rxjs'
import { LocalStorageService } from './local-storage.service'



@Injectable({
  providedIn: 'root'
})
export class UserService {

  /**
   * Configurações do sistema.
   */
  private config: Config = new Config

  public modalRecoveryPass: BehaviorSubject<any> = new BehaviorSubject<any>(null)

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) { }

  getUser(): Observable<any> {
    return this.http.get<any>(this.config.get('urlServiceBackend') + 'auth/me')
  }

  /**
   * Obter dados do usuário que estão armazenados no processo de login
   */
  getUsuarioLocal() {
    return this.localStorageService.get('usuario')
  }

  /**
   * Obter lista de modulos que estão acessíveis para o usuário logado.
   */
  getModulos() {
    return (this.localStorageService.get('usuario')) ? this.localStorageService.get('usuario').modulo : []
  }

  /**
   * Envia o email com o link de redefinição de senha para o usuário
   */
  recoveryPassowrd(data: any) {
    return this.http.post(this.config.get('urlServiceBackend') + `auth/reset-password`, data)
  }
}
