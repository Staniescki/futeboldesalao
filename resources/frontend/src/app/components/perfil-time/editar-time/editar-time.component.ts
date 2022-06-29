import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IDropdownSettings} from "ng-multiselect-dropdown";
import {LoaderService} from "../../../services/loader.service";
import {SnotifyService} from "ng-snotify";
import * as moment from "moment";
import {TimeService} from "../../../services/time.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-editar-time',
  templateUrl: './editar-time.component.html',
  styleUrls: ['./editar-time.component.scss']
})
export class EditarTimeComponent implements OnInit {

  formulario: FormGroup;

  data_nascimento: any

  public dropdownSettings: IDropdownSettings;

  public name: any

constructor(public fb: FormBuilder,
            public dialogRef: MatDialogRef<EditarTimeComponent>,
            @Inject(MAT_DIALOG_DATA) public data: any,
            private loader: LoaderService,
            private notify: SnotifyService,
            private timeService: TimeService,
            private router: Router,
            ) {

  this.name = this.data[1].map( (item:any) => {
    return {
      id_usuario: item.id_usuario,
      descricao: item.apelido,
    }
  })

      let dateObj = new Date(this.data[0].jogadores.time[0].fundacao_time)
      this.data_nascimento = dateObj

      this.formulario = fb.group({
      nome: [this.data[0].jogadores.time[0].nome_time, Validators.required],
      nome_oficial: [this.data[0].jogadores.time[0].nome_oficial, Validators.required],
      categoria: [this.data[0].jogadores.time[0].categoria, Validators.required],
      presidente: [this.data[0].jogadores.id_usuario, Validators.required],
      fundacao_time: [this.data_nascimento, Validators.required],
    });
  }

  submit(){

    this.loader.show()
    if (!this.formulario.valid){
      this.notify.warning('Revisar Formulario! Preenchimento incorreto')
      this.loader.hide()
      return
    }

    if (this.formulario.value.data_nascimento != null) {
      this.formulario.value.data_nascimento = moment(this.formulario.value.data_nascimento, 'DDMMYYYY').format('YYYY/MM/DD')
    }

    this.timeService.atualizarTime(this.formulario.value).subscribe(response => {
      this.loader.hide()
      this.handlerResponse(response)
      this.reloadCurrentRoute()
    }, error => console.error(error))
  }

  reloadCurrentRoute() {
    this.router.onSameUrlNavigation
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/home', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  handlerResponse(data: any){
    if(data.status == '200'){
      this.notify.success('Equipe Editada com sucesso');
    }
    if (data.code == '210'){
      this.notify.warning('E-mail ja utilizado, favor revisar!')
    }
  }

  ngOnInit(): void {
    this.dialogRef.updateSize('65%', '75%');
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'id_usuario',
      textField: 'descricao',
      selectAllText: 'Selecionar Todos',
      unSelectAllText: 'Desmarcar Todos',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

}
