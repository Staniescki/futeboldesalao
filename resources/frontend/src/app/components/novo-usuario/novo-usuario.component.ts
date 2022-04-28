import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.scss']
})
export class NovoUsuarioComponent implements OnInit {

  validationForm: FormGroup;

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
    this.validationForm = fb.group({
      emailFormEx: ['', [Validators.required, Validators.email]],
      passwordFormEx: ['', Validators.required],
    });
  }

  get emailFormEx() {
    return this.validationForm.get('emailFormEx');
  }

  get passwordFormEx() {
    return this.validationForm.get('passwordFormEx');
  }

}
