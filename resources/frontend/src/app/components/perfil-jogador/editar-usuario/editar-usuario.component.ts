import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import * as moment from "moment";
import {LoaderService} from "../../../services/loader.service";
import {SnotifyService} from "ng-snotify";
import {UserService} from "../../../services/user.service";
import {LocalStorageService} from "../../../services/local-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {

  isVisible: boolean = false

  abaSelected = 'home'

  data_nascimento: any

  formulario: FormGroup

  constructor(public fb: FormBuilder,
              public dialogRef: MatDialogRef<EditarUsuarioComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private loader: LoaderService,
              private notify: SnotifyService,
              private userService: UserService,
              private localStorage: LocalStorageService,
              private router: Router) {


    let dateObj = new Date(this.data.jogadores.data_nascimento)
    this.data_nascimento = dateObj
    this.formulario = fb.group({
      id: [this.localStorage.get('current_user').id, Validators.required],
      email: [this.data.email, [Validators.required, Validators.email]],
      nome_completo: [this.data.name, Validators.required],
      apelido: [this.data.jogadores.apelido, Validators.required],
      data_nascimento: [this.data_nascimento, Validators.required],
      posicao: [this.data.jogadores.posicao, Validators.required],
      sexo: [this.data.jogadores.sexo, Validators.required],
      pe_preferido: [this.data.jogadores.pe_preferido, Validators.required],
      idade: [this.data.jogadores.idade, Validators.required],
      rua: [this.data.endereco_usuario.rua, Validators.required],
      bairro: [this.data.endereco_usuario.bairro, Validators.required],
      numero: [this.data.endereco_usuario.numero, Validators.required],
      cidade: [this.data.endereco_usuario.cidade, Validators.required],
      cep: [this.data.endereco_usuario.cep, Validators.required],
      celular: [this.data.jogadores.celular, Validators.required],
      telefone: [this.data.jogadores.telefone, Validators.required],
      facebook: [this.data.jogadores.facebook, Validators.required],
      instagram: [this.data.jogadores.instagram, Validators.required],
      twitter: [this.data.jogadores.twitter, Validators.required],
    });
  }


  ngOnInit(): void {
    this.dialogRef.updateSize('75%', '80%');
  }

  closeModal(){
    this.isVisible = false
  }

  public changeAbaSelected(aba: string){
    this.abaSelected = aba
  }

  submit() {
    this.loader.show()
    if (!this.formulario.valid){
      this.notify.warning('Revisar Formulario! Preenchimento incorreto')
      this.loader.hide()
      return
    }

    //PENSAR COMO ATUALIZAR A FOTO DO JOGADOR

    /*if (this.imagemJogador != null) {
      this.formulario.value.img = this.imagemJogador.split(',')[1]
    }*/

    if (this.formulario.value.data_nascimento != null) {
      this.formulario.value.data_nascimento = moment(this.formulario.value.data_nascimento, 'DDMMYYYY').format('YYYY/MM/DD')
    }

    this.userService.updateUser(this.formulario.value).subscribe(response => {

      this.loader.hide()
      this.handlerResponse(response)
      this.reloadCurrentRoute()
    }, error => this.notify.error(error))
  }

  handlerResponse(data: any){
    if(data.status == '200'){
      this.notify.success('Usuario Editado com sucesso');
    }
    if (data.code == '210'){
      this.notify.warning('E-mail ja utilizado, favor revisar!')
    }
 }

  reloadCurrentRoute() {
    this.router.onSameUrlNavigation
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/home', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

}
