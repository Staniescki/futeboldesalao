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
