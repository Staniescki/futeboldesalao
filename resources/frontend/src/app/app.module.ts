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
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatNativeDateModule} from '@angular/material/core'
import { MatInputModule } from '@angular/material/input'
import { AgendaComponent } from './components/agenda/agenda.component'
import { EditarUsuarioComponent } from './components/perfil-jogador/editar-usuario/editar-usuario.component'
import {MatDialogModule} from '@angular/material/dialog'
import { EditarTimeComponent } from './components/perfil-time/editar-time/editar-time.component'
import { PagamentoComponent } from './components/pagamento/pagamento.component'
import { LoginComponent } from './components/login/login.component'
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {LoaderComponent} from "./components/loader/loader.component"
import {TokenInterceptor} from "./services/interceptors/token-interceptor";
import {LocalStorageService} from "./services/local-storage.service";
import {JwtServiceService} from "./services/jwt-service.service";
import {ForbiddenInterceptor} from "./services/interceptors/forbidden-interceptor";
import { CriarEventoComponent } from './components/agenda/criar-evento/criar-evento.component';
import { EditarEventoComponent } from './components/agenda/editar-evento/editar-evento.component';
import {MatIconModule} from '@angular/material/icon'
import {MatFormField} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import { HomeComponent } from './components/home/home.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import {RouterModule, Routes} from "@angular/router";
import {IConfig, NgxMaskModule} from "ngx-mask";
import {TextMaskModule} from "angular2-text-mask";
import {MatFileUploadModule} from "angular-material-fileupload";

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    dropSpecialCharacters: true,
  };
};

export const routes: Routes = [
  {path:'perfil-jogador', component: PerfilJogadorComponent}
]


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
    LoaderComponent,
    CriarEventoComponent,
    EditarEventoComponent,
    HomeComponent,
  ],
  imports: [
    MatFileUploadModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload'}),
    NgxMaskModule.forRoot(maskConfigFunction),
    TextMaskModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
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
    MatNativeDateModule,
    MatDialogModule,
    HttpClientModule,
    MatSelectModule
  ],
  exports:[NovoUsuarioComponent,MatDatepickerModule, MatFormField],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
      deps: [JwtServiceService, LocalStorageService]
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ForbiddenInterceptor,
      multi: true,
      deps: [SnotifyService]
    }
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
