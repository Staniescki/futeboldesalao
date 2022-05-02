import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.scss']
})
export class NovoUsuarioComponent implements OnInit {

  formulario: FormGroup;

  public celular: any

  public abaSelected = 'home'

  public posicoes: Array<string> = [
    'Pivo','Ala','Goleiro','Fixo'
  ]

  public changeAbaSelected(aba: string){
    this.abaSelected = aba
  }

  ngOnInit(){

  }

  constructor(public fb: FormBuilder) {
    this.formulario = fb.group({
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

    });
  }

}
