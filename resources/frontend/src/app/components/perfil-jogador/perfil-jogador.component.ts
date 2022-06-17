import {Component, OnInit} from '@angular/core';
import {EditarUsuarioComponent} from "./editar-usuario/editar-usuario.component";
import {MatDialog} from "@angular/material/dialog";
import {LocalStorageService} from "../../services/local-storage.service";
import {JogadorService} from "../../services/jogador.service";
import {LoaderService} from "../../services/loader.service";
import {usuario} from "../../model/usuarios.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-perfil-jogador',
  templateUrl: './perfil-jogador.component.html',
  styleUrls: ['./perfil-jogador.component.scss']
})
export class PerfilJogadorComponent implements OnInit {

  public usuario: usuario = this.activatedRoute.snapshot.data['usuario'].usuario[0]

  public user: any

  constructor(public dialog: MatDialog,
              private activatedRoute: ActivatedRoute,
              private localStorage: LocalStorageService,
              private jogadorService: JogadorService,
              private loader: LoaderService) { }

  ngOnInit(): void {
    this.user = this.localStorage.get('usuario')

  }
 openModal(){
    this.dialog.open(EditarUsuarioComponent, {disableClose: true, data: this.usuario})
 }

}
