import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {EditarTimeComponent} from "./editar-time/editar-time.component";

@Component({
  selector: 'app-perfil-time',
  templateUrl: './perfil-time.component.html',
  styleUrls: ['./perfil-time.component.scss']
})
export class PerfilTimeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openModalEditarTime(){
    this.dialog.open(EditarTimeComponent)
  }

}
