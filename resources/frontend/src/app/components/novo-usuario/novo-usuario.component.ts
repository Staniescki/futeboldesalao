import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {Component, OnInit, ViewChild} from '@angular/core';
import {LoaderService} from "../../services/loader.service";
import {UserService} from "../../services/user.service";
import {SnotifyService} from "ng-snotify";
import * as moment from 'moment';



@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.scss']
})
export class NovoUsuarioComponent implements OnInit {

  public formulario: FormGroup;

  public celular: any

  public abaSelected = 'home'

  public posicoes: Array<string> = [
    'Pivo','Ala','Goleiro','Fixo'
  ]

  public imgComprovanteBase64: any

  private elementFile: any

  public file: any

  public changeAbaSelected(aba: string){
    this.abaSelected = aba
  }

  ngOnInit() {
    this.formulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      nome_completo: ['', Validators.required],
      apelido: ['', Validators.required],
      data_nascimento: ['', Validators.required],
      posicao: ['', Validators.required],
      sexo: ['', Validators.required],
      pe_preferido: ['', Validators.required],
      idade: ['', Validators.required],
      rua: ['', Validators.required],
      bairro: ['', Validators.required],
      numero: ['', Validators.required],
      cidade: ['', Validators.required],
      cep: ['', Validators.required],
      imgJogador: ['', Validators.required]

    })
  }

  constructor(private fb: FormBuilder,
              private loader: LoaderService,
              private userService: UserService,
              private notify: SnotifyService) {}


  onSubmit(){
    /*this.loader.show()
    if (!this.formulario.valid){
    this.notify.warning('Revisar Formulario! Preenchimento incorreto')
      this.loader.hide()
      return
    }*/
    let data: Array<any> = []

    const reader = new FileReader()

    reader.onloadend = () => {
      this.imgComprovanteBase64 = reader.result
    }

    if (this.imgComprovanteBase64 != null){
      data['img'] = this.imgComprovanteBase64.split(',')[1]
    }

    if(this.formulario.value.email != null){
      data['email'] = this.formulario.value.email
    }
    if(this.formulario.value.senha != null || this.formulario.value.senha){
      data['senha'] = this.formulario.value.senha
    }
    if(this.formulario.value.nome_completo != null || this.formulario.value.nome_completo){
      data['nome_completo'] = this.formulario.value.nome_completo
    }
    if(this.formulario.value.apelido != null || this.formulario.value.apelido){
      data['apelido'] = this.formulario.value.apelido
    }
    if(this.formulario.value.data_nascimento != null || this.formulario.value.data_nascimento){
      data['data_nascimento'] = moment(this.formulario.value.data_nascimento, 'DDMMYYYY').format('YYYY-MM-DD')
    }
    if(this.formulario.value.posicao != null || this.formulario.value.posicao){
      data['posicao'] = this.formulario.value.posicao
    }
    if(this.formulario.value.sexo != null || this.formulario.value.sexo){
      data['sexo'] = this.formulario.value.sexo
    }
    if(this.formulario.value.pe_preferido != null || this.formulario.value.pe_preferido){
      data['pe_preferido'] = this.formulario.value.pe_preferido
    }
    if(this.formulario.value.idade != null || this.formulario.value.idade){
      data['idade'] = this.formulario.value.idade
    }
    if(this.formulario.value.rua != null || this.formulario.value.rua){
      data['rua'] = this.formulario.value.rua
    }
    if(this.formulario.value.bairro != null || this.formulario.value.bairro){
      data['bairro'] = this.formulario.value.bairro
    }
    if(this.formulario.value.numero != null || this.formulario.value.numero){
      data['numero'] = this.formulario.value.numero
    }
    if(this.formulario.value.cidade != null || this.formulario.value.cidade){
      data['cidade'] = this.formulario.value.cidade
    }
    if(this.formulario.value.cep != null || this.formulario.value.cep){
      data['cep'] = this.formulario.value.cep
    }

console.log(data)

   /* this.userService.createUser(data).subscribe(responde => {
      this.loader.hide()
      this.notify.success('Usuario inserido com sucesso')
    }, error => this.notify.error(error))
*/
    /*console.log(this.formulario.get('email').value)
    console.log(this.formulario.value.email)*/


  }

  onFileChange(event: any): void {
    this.elementFile = event.target
  }
}
