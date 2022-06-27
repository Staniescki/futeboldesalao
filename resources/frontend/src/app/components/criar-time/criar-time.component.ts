import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {ActivatedRoute} from "@angular/router";
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import {QuadraService} from "../../services/quadra.service";
import {Observable, Subscriber} from "rxjs";
import * as moment from "moment";
import {SnotifyService} from "ng-snotify";
import {LoaderService} from "../../services/loader.service";
import {TimeService} from "../../services/time.service";

@Component({
  selector: 'app-criar-time',
  templateUrl: './criar-time.component.html',
  styleUrls: ['./criar-time.component.scss']
})
export class CriarTimeComponent implements OnInit {

  validationForm: FormGroup;

  private elementFile: any

  public nome_clube = ''

  public imagemJogador: any = 'https://img.freepik.com/vetores-gratis/escudo-de-metal-vazio-isolado_1284-43029.jpg?w=2000'

  public dropdownSettings: IDropdownSettings;

  public quadras: any

  public name: any

  public usuarios: any = this.activatedRoute.snapshot.data['jogadores'].body.user

  ngOnInit(): void {
  this.quadraService.getQuadras().subscribe(data => {
    this.quadras = data.quadras
  })
  this.dropdownSettings = {
      singleSelection: true,
      idField: 'id_usuario',
      textField: 'descricao',
      selectAllText: 'Selecionar Todos',
      unSelectAllText: 'Desmarcar Todos',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  constructor(public fb: FormBuilder,
              private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private quadraService: QuadraService,
              private notify: SnotifyService,
              private loader: LoaderService,
              private timeService: TimeService) {

    this.name = this.usuarios.map( (item:any) => {
      return {
        id_usuario: item.id_usuario,
        descricao: item.apelido,
      }
    })

    this.validationForm = fb.group({
      nome: ['', Validators.required],
      nome_oficial: ['', Validators.required],
      categoria: ['', Validators.required],
      presidente: ['', Validators.required],
      fundacao_time: ['', Validators.required],
      cidade: ['', Validators.required],
      quadra_local: ['', Validators.required],
      img: [''],
    });
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

onSubmit() {
  this.loader.show()
  if (!this.validationForm.valid){
    this.notify.warning('Revisar Formulario! Preenchimento incorreto')
    this.loader.hide()
    return
  }

  if (this.imagemJogador != null) {
    this.validationForm.value.img = this.imagemJogador.split(',')[1]
  }

  if (this.validationForm.value.fundacao_time != null) {
    this.validationForm.value.fundacao_time = moment(this.validationForm.value.fundacao_time, 'DDMMYYYY').format('YYYY/MM/DD')
  }

  this.timeService.criarTime(this.validationForm.value).subscribe(data => {
    this.loader.hide()
    this.handlerResponse(data)
  }, error => this.notify.error(error))
}

handlerResponse(data: any) {
  if(data.status == '200'){
    this.notify.success('Time Cadastrado com sucesso');
  }
  if (data.code == '210'){
    this.notify.warning('Time ja utilizado, favor revisar!')
  }

}


}
