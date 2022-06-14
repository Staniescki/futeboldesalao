import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../services/token.service";
import {LocalStorageService} from "../../services/local-storage.service";
import {JwtServiceService} from "../../services/jwt-service.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public tokenService: TokenService,
              public localStorage: LocalStorageService,
              public jwtService: JwtServiceService) { }

  ngOnInit(): void {
  }

}
