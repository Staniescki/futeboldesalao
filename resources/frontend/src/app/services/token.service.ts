import { Injectable } from '@angular/core'
import { Config } from '../config/main'
import {LocalStorageService} from "./local-storage.service";
import {BehaviorSubject} from "rxjs";
import * as moment from 'moment';
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class TokenService {
  /**
   * Configurações do sistema.
   */
  config: Config = new Config

  public autenticacaoExpirada: BehaviorSubject<any> = new BehaviorSubject<any>(false);

  constructor(public storageService: LocalStorageService, private route: Router) {}

  handle(token: any): Promise<boolean> {
    return new Promise((resolve => {
      this.set(token)
      resolve(true)
    }))
  }

  /**
   * Salva o token no storage do navegador.
   * @param token Token de autenticação.
   */
  set(token: any) {
    this.storageService.set('token', token);
  }

  /**
   * Obter token.
   */
  get() {
    return this.storageService.get('token');
  }

  /**
   * Remover token.
   */
  remove() {
    this.storageService.remove('token');
  }

  /**
   * Verificar se existe token válido.
   */
  isValid() {
    const token = this.get()
    if (token) {
      const payload = this.payload(token)
      if (payload) {
        return (payload.iss) ? true : false
      }
    }
    return false
  }

  payload(token: any) {
    const payload = token.split('.')[1]
    return this.decode(payload)
  }

  decode(payload: any) {
    return JSON.parse(atob(payload))
  }

  loggedIn() {
    return this.isValid()
  }

  verificarValidadeToken() {
    let token = this.get();
    if(token !== null){
      let payload = this.payload(this.get());
      if (payload.exp > moment().unix()) {
        const oneMinuteBeforeLogout = moment.unix(payload.exp).subtract(1, 'minutes').format("YYYY-MM-DD HH:mm");
        let oneMinuteBeforeLogoutUnix = moment(oneMinuteBeforeLogout).unix();
        if (moment().unix() == oneMinuteBeforeLogoutUnix) {
          this.route.navigateByUrl('/login')
        }
        // Verifica a validade do token a cada minuto
        setTimeout(() => { this.verificarValidadeToken() }, 60000);
      } else {
        this.autenticacaoExpirada.next(true)
      }
    }
  }
}
