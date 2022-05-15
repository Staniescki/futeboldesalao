import { Component, OnInit } from '@angular/core';
import {LoginService} from "./services/login.service";

interface SideNavToggle {
  screenWidth: number
  collapsed: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'frontend';

  public main: any

  isSideNavCollapsed = false
  screenWidth = 0

  onToogleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth
    this.isSideNavCollapsed = data.collapsed
  }

  mostrarMenu: boolean = false

  constructor(private login: LoginService) {
  }

  ngOnInit(){
    this.login.mostrarMenu.subscribe(
      response => this.mostrarMenu = response
    );
  }

}
