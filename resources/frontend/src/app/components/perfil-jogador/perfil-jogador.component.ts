import {Component, OnInit} from '@angular/core';
import {EditarUsuarioComponent} from "./editar-usuario/editar-usuario.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-perfil-jogador',
  templateUrl: './perfil-jogador.component.html',
  styleUrls: ['./perfil-jogador.component.scss']
})
export class PerfilJogadorComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

 openModal(){
    this.dialog.open(EditarUsuarioComponent)
 }

}
