import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {NovoUsuarioComponent} from './components/novo-usuario/novo-usuario.component'
import {SidebarComponent} from './components/sidebar/sidebar.component'
import {PerfilJogadorComponent} from "./components/perfil-jogador/perfil-jogador.component";
import {EstatisticasJogadorComponent} from "./components/estatisticas-jogador/estatisticas-jogador.component";
import {EstatisticasTimeComponent} from "./components/estatisticas-time/estatisticas-time.component";
import {CriarTimeComponent} from "./components/criar-time/criar-time.component";
import {PerfilTimeComponent} from "./components/perfil-time/perfil-time.component";
import {AgendaComponent} from "./components/agenda/agenda.component";

const routes: Routes = [
  {path: "", redirectTo: "", pathMatch: "full"},
  {path: "novo-usuario", component:NovoUsuarioComponent},
  {path: "perfil-jogador", component:PerfilJogadorComponent},
  {path: "estatisticas-jogador", component:EstatisticasJogadorComponent},
  {path: "estatisticas-time", component:EstatisticasTimeComponent},
  {path: "novo-time", component:CriarTimeComponent},
  {path: "perfil-time", component:PerfilTimeComponent},
  {path: "agenda", component:AgendaComponent},
  {path: "login", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
