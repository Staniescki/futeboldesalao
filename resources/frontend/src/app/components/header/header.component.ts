import {Component, Input, OnInit} from '@angular/core';
import {TokenService} from "../../services/token.service";
import {LocalStorageService} from "../../services/local-storage.service";
import {JwtServiceService} from "../../services/jwt-service.service";
import {UserService} from "../../services/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public usuario: any

  constructor(public tokenService: TokenService,
              public localStorage: LocalStorageService,
              public activatedRoute: ActivatedRoute,
              public jwtService: JwtServiceService,
              public userService: UserService
              ) { }

  ngOnInit(): void {
    this.usuario = this.localStorage.get('current_user')
  }
}
