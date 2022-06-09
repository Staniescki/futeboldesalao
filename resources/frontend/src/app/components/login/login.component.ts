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
   * Elemento Body
   */
  private elementBody: any

  /**
   * Define se o CAPS LOCK está ligado.
   */
  public capsLockLigado: boolean

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


    this.token.autenticacaoExpirada.subscribe((expirado) => {
      if(expirado) {
        console.log('Expirado irmao')
      }
    })


  }

  onSubmit() {
    this.loader.show()
    if (this.loginForm.invalid) {
      this.loader.hide()
      return
    }
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
    await this.token.handle(data.access_token)
    this.auth.changeAuthStatus(true)
    this.localStorageService.set('current_user', data.current_user)
    this.userService.getUser().subscribe((response: any) => {
    this.localStorageService.set('usuario', response)
    }, (error: any) => {
       this.notify.error("Ocorreu um erro ao resgatar permissoes")
    })
    if (redirect) {
      this.router.navigateByUrl('/home');
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
