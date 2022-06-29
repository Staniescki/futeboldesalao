import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {EditarTimeComponent} from "./editar-time/editar-time.component";
import {ActivatedRoute} from "@angular/router";
import {usuario} from "../../model/usuarios.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable, Subscriber} from "rxjs";

@Component({
  selector: 'app-perfil-time',
  templateUrl: './perfil-time.component.html',
  styleUrls: ['./perfil-time.component.scss']
})
export class PerfilTimeComponent implements OnInit {

  public usuario: usuario = this.activatedRoute.snapshot.data['usuario'].usuario[0]

  public usuarios: any = this.activatedRoute.snapshot.data['jogadores'].body.user

  public imagePath: any

  private elementFile: any

  public imagemJogador: any

  public formulario: FormGroup

  constructor(public dialog: MatDialog,
              private fb: FormBuilder,
              private activatedRoute: ActivatedRoute) {

    const b64ToBlob = async(b64: any, type = "image") => {
      const blob = await fetch(`data:${type}/png;base64,${b64}`)
      this.imagePath = blob.url
      return blob
    }
    b64ToBlob(this.usuario.jogadores?.time[0]?.img)
  }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      photo: ['', [Validators.required, Validators.email]],
    })
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

  get getPhoto() {
    return this.formulario.controls
  }

  onSubmit(){

  }

  openModalEditarTime(){
    this.dialog.open(EditarTimeComponent,{disableClose: true, data: [this.usuario, this.usuarios]})
  }

}
