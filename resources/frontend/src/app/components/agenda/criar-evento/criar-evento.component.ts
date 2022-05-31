import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoaderService} from "../../../services/loader.service";
import {SnotifyService} from "ng-snotify";

@Component({
  selector: 'app-criar-evento',
  templateUrl: './criar-evento.component.html',
  styleUrls: ['./criar-evento.component.scss']
})
export class CriarEventoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<any>,
              private loader: LoaderService,
              private notify: SnotifyService) { }

  cadastroForm: FormGroup

  ngOnInit(): void {
    this.dialogRef.updateSize('40%', '60%');
      this.cadastroForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      id: new FormControl('', [Validators.required]),
      start: new  FormControl('', [Validators.required]),
      end: new FormControl('', [Validators.required]),
      quadra_id: new FormControl('', [Validators.required])
    })
  }

  onSubmit() {
    this.loader.show()
    if (!this.cadastroForm.valid){
      this.notify.warning('Revisar Formulario! Preenchimento incorreto')
      this.loader.hide()
      return
    }

    console.log(this.cadastroForm.value);
  }

}
