import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
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
  styleUrls: ['./editar-evento.component.scss'],
  encapsulation: ViewEncapsulation.None,
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
    console.log(this.data)
    this._formatarData()
    this.dialogRef.updateSize('40%', '66%');
    this.editarForm = new FormGroup({
      id: new FormControl(this.data.info.event.id, [Validators.required]),
      title: new FormControl(this.data.info.event.title, [Validators.required]),
      start: new  FormControl(this.startDate, [Validators.required]),
      end: new  FormControl(this.endDate, [Validators.required]),
      id_quadra: new FormControl(this.data.info.event.extendedProps.id_quadra, [Validators.required]),
      color: new FormControl(this.data.info.event.backgroundColor, [Validators.required]),
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
    if (!this.editarForm.valid){
      this.notify.warning('Revisar Formulario! Preenchimento incorreto')
      this.loader.hide()
      return
    }

    this.editarForm.value.start += ':00'
    this.editarForm.value.end += ':00'

    this.agendaService.editarPartida(this.editarForm.value).subscribe(data => {
      if (data) {
        this.notify.success('Sucesso ao editar partida')
        this.dialogRef.close()
        this.data.info.view.calendar.changeView('dayGridMonth')
        this.loader.hide()
        this.agendaService.salvar.next(true)
      }
    }, error => console.error(error))

  }

  excluirEvento() {
    if (confirm(`Deseja realmente excluir este evento?`)){
      this.agendaService.excluirPartida(this.data.info.event.id).subscribe(data => {
        if (data) {
          this.notify.success('Sucesso ao excluir partida')
          this.dialogRef.close()
          this.data.info.view.calendar.changeView('dayGridMonth')
          this.loader.hide()
          this.agendaService.salvar.next(true)
        }
      }, error => console.error(error))

    }


  }

}
