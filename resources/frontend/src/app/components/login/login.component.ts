import { Component, OnInit } from '@angular/core';
import {Login} from "./login";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public usuario: Login = new Login()

  constructor(private loginService: LoginService){

  }
  ngOnInit(): void {
  }

  fazerLogin(){
    //console.log(this.usuario)
    this.loginService.fazerLogin(this.usuario)
  }

}
