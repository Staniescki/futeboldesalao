import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {Component, OnInit} from '@angular/core';
import {LoaderService} from "../../services/loader.service";
import {UserService} from "../../services/user.service";
import {SnotifyService} from "ng-snotify";
import * as moment from 'moment';
import {Observable, Subscriber} from "rxjs";

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

  public imagemJogador: any

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
      img: [''],
    })
  }

  constructor(private fb: FormBuilder,
              private loader: LoaderService,
              private userService: UserService,
              private notify: SnotifyService) {}


  onSubmit(){

    this.loader.show()
    if (!this.formulario.valid){
      this.notify.warning('Revisar Formulario! Preenchimento incorreto')
      this.loader.hide()
      return
    }

    if (this.imagemJogador != null) {
      this.formulario.value.img = this.imagemJogador.split(',')[1]
    }
    if (this.formulario.value.data_nascimento != null) {
      this.formulario.value.data_nascimento = moment(this.formulario.value.data_nascimento, 'DDMMYYYY').format('YYYY-MM-DD')
    }

    this.userService.createUser(this.formulario.value).subscribe(response => {

      this.loader.hide()
      this.handlerResponse(response)
    }, error => this.notify.error(error))
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

  handlerResponse(data: any){
    if(data.status == '200'){
      this.notify.success('Usuario Cadastrado com sucesso');
    }
    if (data.code == '210'){
      this.notify.warning('Email ja utilizado, favor revisar!')
    }

  }
}
