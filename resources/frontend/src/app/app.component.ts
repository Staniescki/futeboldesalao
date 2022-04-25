import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

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

  isSideNavCollapsed = false
  screenWidth = 0

  onToogleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth
    this.isSideNavCollapsed = data.collapsed
  }

}
