import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoaderService} from "../../../services/loader.service";
import {SnotifyService} from "ng-snotify";
import {AgendaComponent} from "../agenda.component";
import * as moment from 'moment';
import {AgendaService} from "../../../services/agenda.service";
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-criar-evento',
  templateUrl: './criar-evento.component.html',
  styleUrls: ['./criar-evento.component.scss']
})
export class CriarEventoComponent implements OnInit {

  public startDate: string
  public endDate: string

  constructor(public dialogRef: MatDialogRef<AgendaComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private loader: LoaderService,
              private notify: SnotifyService,
              private agendaService: AgendaService,
              private route: ActivatedRoute) { }

  cadastroForm: FormGroup

  ngOnInit(): void {
    console.log(this.data)
    this._formatarData()
    this.dialogRef.updateSize('40%', '66%');
      this.cadastroForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      start: new  FormControl(this.startDate, [Validators.required]),
      end: new  FormControl(this.endDate, [Validators.required]),
      id_quadra: new FormControl(this.data.id_quadra, [Validators.required]),
      color: new FormControl('purple', [Validators.required]),
      description: new FormControl('', [Validators.required])
    })
}

  _formatarData(){
    let dateObj = new Date(this.data.info.dateStr)
    let dateString = dateObj.toLocaleString('pt-BR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute:'2-digit',
    }).replace(/\//g, '-')
    this.startDate = moment(dateString, 'DD/MM/YYYY HH:mm').format('YYYY-MM-DDTHH:mm')

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
    this.loader.show()
    if (!this.cadastroForm.valid){
      this.notify.warning('Revisar Formulario! Preenchimento incorreto')
      this.loader.hide()
      return
    }

    this.cadastroForm.value.start += ':00'
    this.cadastroForm.value.end += ':00'

    this.agendaService.salvarPartida(this.cadastroForm.value).subscribe(data => {
      if (data){
        this.notify.success('Sucesso ao Cadastrar partida')
        this.dialogRef.close()
        this.data.info.view.calendar.changeView('dayGridMonth')
        this.loader.hide()
        this.agendaService.salvar.next(true)
      }
    },error => console.error(error))
  }
}
