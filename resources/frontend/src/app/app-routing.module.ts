import { NgModule } from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {NovoUsuarioComponent} from './components/novo-usuario/novo-usuario.component'
import {SidebarComponent} from './components/sidebar/sidebar.component'
import {PerfilJogadorComponent} from "./components/perfil-jogador/perfil-jogador.component";
import {EstatisticasJogadorComponent} from "./components/estatisticas-jogador/estatisticas-jogador.component";
import {EstatisticasTimeComponent} from "./components/estatisticas-time/estatisticas-time.component";
import {CriarTimeComponent} from "./components/criar-time/criar-time.component";
import {PerfilTimeComponent} from "./components/perfil-time/perfil-time.component";
import {AgendaComponent} from "./components/agenda/agenda.component";
import {PagamentoComponent} from "./components/pagamento/pagamento.component";
import {HomeComponent} from "./components/home/home.component";
import {AfterLoginService} from "./services/after-login.service";
import {PerfilResolver} from "./resolver/perfil.resolver";
import {SnotifyService} from "ng-snotify";
import {TokenService} from "./services/token.service";
import {NomeJogadoresResolver} from "./resolver/nome-jogadores.resolver";

const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch: "full"},
  {path: "home", component:HomeComponent,canActivate: [AfterLoginService]},
  {path: "novo-usuario", component:NovoUsuarioComponent, canActivate: [AfterLoginService]},
  {path: "perfil-jogador", component:PerfilJogadorComponent, canActivate: [AfterLoginService], resolve: {usuario: PerfilResolver}},
  {path: "estatisticas-jogador", component:EstatisticasJogadorComponent, canActivate: [AfterLoginService]},
  {path: "estatisticas-time", component:EstatisticasTimeComponent, canActivate: [AfterLoginService]},
  {path: "novo-time", component:CriarTimeComponent, canActivate: [AfterLoginService], resolve: {jogadores: NomeJogadoresResolver}},
  {path: "perfil-time", component:PerfilTimeComponent, canActivate: [AfterLoginService]},
  {path: "agenda/:id", component:AgendaComponent, canActivate: [AfterLoginService]},
  {path: "login", component:LoginComponent},
  {path: "pagamento", component:PagamentoComponent, canActivate: [AfterLoginService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router, snotify: SnotifyService, tokenService: TokenService) {
    this.router.errorHandler = (error: any) => {
      snotify.warning('O recurso que você está tentando acessar não existe.', {
        closeOnClick: true,
        timeout: 0,
        showProgressBar: false,
        buttons: [{text: 'Fechar', bold: false}]
      })
      if(!tokenService.loggedIn()){
        this.router.navigateByUrl('/home')
      }
    }
  }
}
