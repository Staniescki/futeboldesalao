import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-criar-time',
  templateUrl: './criar-time.component.html',
  styleUrls: ['./criar-time.component.scss']
})
export class CriarTimeComponent implements OnInit {

  validationForm: FormGroup;

  ngOnInit(): void {
  }

  constructor(public fb: FormBuilder) {
    this.validationForm = fb.group({
      nome: ['', Validators.required],
      nome_oficial: ['', Validators.required],
      categoria: ['', Validators.required],
      presidente: ['', Validators.required],
      fundacao_time: ['', Validators.required],
    });
  }
onSubmit() {
    console.log(this.validationForm.value)
}


}
