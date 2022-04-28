import {EventEmitter, Injectable} from '@angular/core';
import {Login} from "../components/login/login";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private usuarioAutenticado: boolean = true

  mostrarMenu = new EventEmitter<boolean>()

  constructor(private router: Router) { }

  fazerLogin(usuario: Login){
    if (usuario.email === 'diego.stk@live.com' && usuario.senha === '123456'){
      this.usuarioAutenticado = true
      this.mostrarMenu.emit(true)
      this.router.navigate(['/novo-usuario'])
    }else{
      this.usuarioAutenticado = true
      this.mostrarMenu.emit(true)
    }
  }
}
