import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { TokenService } from './token.service'
import { Observable } from 'rxjs'
import { Router } from '@angular/router'
import { LocalStorageService } from './local-storage.service'
/*import { PermissaoService } from './configuracoes/permissao.service'*/
/*import { AcessoNegadoModalService } from './ui/acesso-negado-modal.service'*/
import { SnotifyService } from 'ng-snotify'


@Injectable({
  providedIn: 'root'
})
export class AfterLoginService implements CanActivate {

  constructor(
    private tokenService: TokenService,
    private router: Router,
    private localStorageService: LocalStorageService,
    private notify: SnotifyService
    ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> {

console.log(!this.tokenService.loggedIn())
    if (!this.tokenService.loggedIn()) {
      this.router.navigateByUrl('/login')
    }

    /*if ( this.localStorageService.get('senha_expirada') === true && !state.url.includes('/eu/alterar-senha') ) {
      this.notify.warning('Sua senha encontra-se expirada, por favor defina uma nova senha para navegar no sistema!');
      this.router.navigateByUrl('/eu/alterar-senha');
    }*/


    let temAcesso = true

    /*const rotaSelecionarEmpresa = '/selecionar-filial'

    if (route.data.roles !== undefined && route.data.roles.length > 0) {
      let temPermissao = false

      for (const index in route.data.roles) {
        temPermissao = this.permissaoService.isPermitted(route.data.roles[index])
      }

      if (temPermissao === true) {
        temAcesso = true
      } else {
        this.acessoNegadoModalService.exibeModal.next(true)
        temAcesso = false
      }

    } else {
      temAcesso = true
    }*/
    return temAcesso
  }



}
