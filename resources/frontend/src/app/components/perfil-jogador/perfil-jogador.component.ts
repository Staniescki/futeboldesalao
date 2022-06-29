import {Component, OnInit} from '@angular/core';
import {EditarUsuarioComponent} from "./editar-usuario/editar-usuario.component";
import {MatDialog} from "@angular/material/dialog";
import {LocalStorageService} from "../../services/local-storage.service";
import {JogadorService} from "../../services/jogador.service";
import {LoaderService} from "../../services/loader.service";
import {usuario} from "../../model/usuarios.model";
import {ActivatedRoute} from "@angular/router";
import { DomSanitizer } from '@angular/platform-browser';
import {toBase64String} from "@angular/compiler/src/output/source_map";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable, Subscriber} from "rxjs";
import {SnotifyService} from "ng-snotify";

@Component({
  selector: 'app-perfil-jogador',
  templateUrl: './perfil-jogador.component.html',
  styleUrls: ['./perfil-jogador.component.scss']
})
export class PerfilJogadorComponent implements OnInit {

  public usuario: usuario = this.activatedRoute.snapshot.data['usuario'].usuario[0]

  public user: any

  public imagePath: any

  public imagemJogador: any

  private elementFile: any


  public formulario: FormGroup;

  constructor(public dialog: MatDialog,
              private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private localStorage: LocalStorageService,
              private jogadorService: JogadorService,
              private loader: LoaderService,
              private notify: SnotifyService) {

      const b64ToBlob = async(b64: any, type = "image") => {
      const blob = await fetch(`data:${type}/png;base64,${b64}`)
      this.imagePath = blob.url
      return blob
    }
    b64ToBlob(this.usuario.jogadores.imgjogador)
  }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      photo: ['', [Validators.required, Validators.email]],
    })
    this.user = this.localStorage.get('usuario')
  }

  get getPhoto() {
    return this.formulario.controls
  }

  onFileChange(event: Event): void {
    this.elementFile = (event.target as HTMLInputElement).files[0]
    this.convertToBase64(this.elementFile)
  }

  convertToBase64(file: File){
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber)
    });
    observable.subscribe((foto) => {
      this.imagemJogador = foto
      this.imagePath = foto
    })
  }

  readFile(file: File, subscriber: Subscriber<any>){
    const filereader = new FileReader()
    filereader.readAsDataURL(file)
    filereader.onload = () => {
      subscriber.next(filereader.result)
      subscriber.complete()
    }
    filereader.onerror = (error) => {
      subscriber.error(error)
      subscriber.complete()
    }
  }

  onSubmit() {
    this.loader.show()
    if (!this.formulario.valid){
      this.notify.warning('Revisar Foto! Preenchimento incorreto')
      this.loader.hide()
      return
    }

    if (this.imagemJogador != null) {
      this.formulario.value.photo = this.imagemJogador.split(',')[1]
    }
  }

  openModal() {
    this.dialog.open(EditarUsuarioComponent, {disableClose: true, data: this.usuario})
 }
}
