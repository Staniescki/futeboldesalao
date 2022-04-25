import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {CommonModule} from "@angular/common";

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { LoginComponent } from './components/login/login.component';
import { NovoUsuarioComponent } from './components/novo-usuario/novo-usuario.component'
import {IconsModule, MDBBootstrapModule} from "angular-bootstrap-md";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BodyComponent } from './components/body/body.component';
import { PerfilJogadorComponent } from './components/perfil-jogador/perfil-jogador.component';
import { EstatisticasJogadorComponent } from './components/estatisticas-jogador/estatisticas-jogador.component';
import { CriarTimeComponent } from './components/criar-time/criar-time.component';
import { EstatisticasTimeComponent } from './components/estatisticas-time/estatisticas-time.component';
import { PerfilTimeComponent } from './components/perfil-time/perfil-time.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    NovoUsuarioComponent,
    SidebarComponent,
    BodyComponent,
    PerfilJogadorComponent,
    EstatisticasJogadorComponent,
    CriarTimeComponent,
    EstatisticasTimeComponent,
    PerfilTimeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule
  ],
  exports:[NovoUsuarioComponent],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
