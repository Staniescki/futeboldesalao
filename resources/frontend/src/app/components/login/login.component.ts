import { Component, OnInit } from '@angular/core';
import {Login} from "./login";
import { Router } from '@angular/router'
import {LoginService} from "../../services/login.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {JwtServiceService} from "../../services/jwt-service.service";
import {LoaderService} from "../../services/loader.service";
import {TokenService} from "../../services/token.service";
import {AuthService} from "../../services/auth.service";
import {LocalStorageService} from "../../services/local-storage.service";
import {UserService} from "../../services/user.service";
import {SnotifyService} from "ng-snotify";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  /**
   * Mensagem de erro.
   */
  errorMessage: string

  /**
   * Status de erro.
   */
  errorStatus: number

  public usuario: Login = new Login()
  public loginForm: FormGroup

  constructor(private loginService: LoginService,
              private formBuilder: FormBuilder,
              private jwtService: JwtServiceService,
              private loader: LoaderService,
              private token: TokenService,
              private auth: AuthService,
              private localStorageService: LocalStorageService,
              private userService: UserService,
              private notify: SnotifyService,
              private router: Router) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  onSubmit() {
    this.loader.show()
    if (this.loginForm.invalid) {
      this.loader.hide()
      return
    }
    console.log(this.loginForm)

    this.jwtService.login(this.loginForm.value).subscribe(
      (data: any) => {
        this.handleResponse(data)
      },
      (error: any) => {
        this.handleError(error)
      }
    )
  }

  /**
   * Resposta da requisição de login.
   * @param data Dados da resposta.
   * @param redirect Caso deva ser redirecionado novamente para o selecionar filiais.
   */
  async handleResponse(data: any, redirect = true) {
    this.loader.hide()
    await this.token.handle(data.data.access_token)
    this.auth.changeAuthStatus(true)
    this.localStorageService.set('current_user', data.data.current_user)
    this.userService.getUser().subscribe((response: any) => {
      this.localStorageService.set('usuario', response.data.usuario)
      this.localStorageService.set('permissoes', response.data.usuario.permissoes)
      this.localStorageService.set('permissoesTotais', response.data.usuario.permissoesTotais)
      this.localStorageService.set('database', data.data.database)
      this.localStorageService.set('encode_expiry', data.data.encode.expiry)
    }, (error: any) => {
       this.notify.error("Ocorreu um erro ao resgatar permissoes")
    })
    this.localStorageService.set('avisos', {avisos: []})
    if (data.data.must_change_password) {
      this.localStorageService.set('senha_expirada', true);
      this.notify.error('Sua senha encontra-se expirada, por favor defina uma nova!');
      this.router.navigateByUrl('/eu/alterar-senha');
    } else if (redirect) {
      this.router.navigateByUrl('/novo-usuario');
    }

    this.notify.success('Autenticado com sucesso!')
  }

  /**
   * Resposta de erro da requisição
   * @param error Dados de erro da requisição
   */
  handleError(error: any) {
    this.loader.hide()
    this.errorStatus = error.status
    if (error.status == 401) {
      this.notify.info('E-mail/Senha incorretos! Favor revisar.', {
        closeOnClick: true,
        timeout: 3000,
        showProgressBar: true,
      })
    }
  }


}
