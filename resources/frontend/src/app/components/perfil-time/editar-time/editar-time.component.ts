import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-editar-time',
  templateUrl: './editar-time.component.html',
  styleUrls: ['./editar-time.component.scss']
})
export class EditarTimeComponent implements OnInit {

  validationForm: FormGroup;

constructor(public fb: FormBuilder, public dialogRef: MatDialogRef<EditarTimeComponent>) {
    this.validationForm = fb.group({
      nome: ['', Validators.required],
      nome_oficial: ['', Validators.required],
      categoria: ['', Validators.required],
      presidente: ['', Validators.required],
      fundacao_time: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

}
