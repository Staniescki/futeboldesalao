import { NgModule, NO_ERRORS_SCHEMA, LOCALE_ID } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {CommonModule} from '@angular/common'
import { MatSliderModule } from '@angular/material/slider'
import {MatDatepickerModule} from '@angular/material/datepicker'
import '@angular/common/locales/global/pt';


import { FullCalendarModule } from '@fullcalendar/angular'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { NovoUsuarioComponent } from './components/novo-usuario/novo-usuario.component'
import {IconsModule, MDBBootstrapModule} from 'angular-bootstrap-md'
import {ReactiveFormsModule} from '@angular/forms'
import { SidebarComponent } from './components/sidebar/sidebar.component'
import { BodyComponent } from './components/body/body.component'
import { PerfilJogadorComponent } from './components/perfil-jogador/perfil-jogador.component'
import { EstatisticasJogadorComponent } from './components/estatisticas-jogador/estatisticas-jogador.component'
import { CriarTimeComponent } from './components/criar-time/criar-time.component'
import { EstatisticasTimeComponent } from './components/estatisticas-time/estatisticas-time.component'
import { PerfilTimeComponent } from './components/perfil-time/perfil-time.component'
import {MatButtonModule} from '@angular/material/button'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatNativeDateModule} from '@angular/material/core'
import { MatInputModule } from '@angular/material/input'
import { AgendaComponent } from './components/agenda/agenda.component'
import { EditarUsuarioComponent } from './components/perfil-jogador/editar-usuario/editar-usuario.component'
import {MatDialogModule} from '@angular/material/dialog'
import { EditarTimeComponent } from './components/perfil-time/editar-time/editar-time.component'
import { PagamentoComponent } from './components/pagamento/pagamento.component'
import { LoginComponent } from './components/login/login.component'
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import {HttpClientModule} from "@angular/common/http";
import {LoaderComponent} from "./components/loader/loader.component"


FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);


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
    AgendaComponent,
    EditarUsuarioComponent,
    EditarTimeComponent,
    PagamentoComponent,
    LoaderComponent



  ],
  imports: [
    SnotifyModule,
    BrowserModule,
    FormsModule,
    FullCalendarModule,
    AppRoutingModule,
    IconsModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    MatSliderModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatDialogModule,
    HttpClientModule
  ],
  exports:[NovoUsuarioComponent,MatDatepickerModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
