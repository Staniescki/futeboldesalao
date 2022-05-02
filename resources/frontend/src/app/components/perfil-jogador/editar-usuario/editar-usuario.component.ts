import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {

  isVisible: boolean = false

  abaSelected = 'home'

  formulario: FormGroup

  constructor(public fb: FormBuilder, public dialogRef: MatDialogRef<EditarUsuarioComponent>) {
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


  ngOnInit(): void {
  }

  closeModal(){
    this.isVisible = false
  }

  public changeAbaSelected(aba: string){
    this.abaSelected = aba
  }

}
