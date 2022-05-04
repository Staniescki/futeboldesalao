import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { Config } from '../config/main'
import { TokenService } from '../services/token.service'



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   * Define se usuário está logado.
   */
  private loggedIn = new BehaviorSubject<boolean>(this.token.loggedIn())

  /**
   * Status da autenticação.
   */
  authStatus = this.loggedIn.asObservable()

  /**
   * Configurações do sistema.
   */
  private config: Config = new Config

  constructor(
    private token: TokenService,
    private http: HttpClient
  ) { }

  changeAuthStatus(value: boolean) {
    this.loggedIn.next(value)
  }

  getIntegracoes() {
    return this.http.get(this.config.get('urlServiceBackend') + 'auth/integracoes');
  }
}
