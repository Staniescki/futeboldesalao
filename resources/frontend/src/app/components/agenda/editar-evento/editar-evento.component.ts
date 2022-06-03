import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AgendaComponent} from "../agenda.component";
import {LoaderService} from "../../../services/loader.service";
import {SnotifyService} from "ng-snotify";
import {AgendaService} from "../../../services/agenda.service";
import * as moment from "moment";

@Component({
  selector: 'app-editar-evento',
  templateUrl: './editar-evento.component.html',
  styleUrls: ['./editar-evento.component.scss']
})
export class EditarEventoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AgendaComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private loader: LoaderService,
              private notify: SnotifyService,
              private agendaService: AgendaService) { }

  editarForm: FormGroup

  public startDate: string
  public endDate: string

  ngOnInit(): void {
    this._formatarData()
    this.dialogRef.updateSize('40%', '66%');
    this.editarForm = new FormGroup({
      title: new FormControl(this.data.info.event.title, [Validators.required]),
      start: new  FormControl(this.startDate, [Validators.required]),
      end: new  FormControl(this.endDate, [Validators.required]),
      id_quadra: new FormControl(this.data.info.event.extendedProps.id_quadra, [Validators.required]),
      color: new FormControl('purple', [Validators.required]),
      description: new FormControl(this.data.info.event.extendedProps.description, [Validators.required])
    })
  }

  _formatarData(){
    let dateObj = new Date(this.data.info.event.startStr)
    let dateString = dateObj.toLocaleString('pt-BR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute:'2-digit',
    }).replace(/\//g, '-')
    this.startDate = moment(dateString, 'DD/MM/YYYY HH:mm').format('YYYY-MM-DDTHH:mm')
    console.log(this.startDate)

    dateObj.setTime(dateObj.getTime() + 1 * 60 * 60 * 1000).toString();
    let dateString2 = dateObj.toLocaleString('pt-BR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute:'2-digit',
    }).replace(/\//g, '-')
    this.endDate = moment(dateString2, 'DD/MM/YYYY HH:mm').format('YYYY-MM-DDTHH:mm')
  }

  onSubmit() {

  }

}
