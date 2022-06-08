import {Component, OnInit} from '@angular/core';
import {CalendarOptions,  EventClickArg} from '@fullcalendar/angular';
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, {DateClickArg} from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from '@fullcalendar/list'
import ptBrLocale from '@fullcalendar/core/locales/pt-br';
import {AgendaService} from "../../services/agenda.service";
import {MatDialog} from "@angular/material/dialog";
import {CriarEventoComponent} from "./criar-evento/criar-evento.component";
import {EditarEventoComponent} from "./editar-evento/editar-evento.component";
import {ActivatedRoute, Router} from "@angular/router";
import {QuadraService} from "../../services/quadra.service";

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  public eventos: any

  public eventSources: any;

  public id_quadra: any

  selectedValue: string;

  public quadras: any

  public quadra_selecionada: any

  constructor(private agendaService: AgendaService,
              public dialog: MatDialog,
              private activeRoute: ActivatedRoute,
              private quadraService: QuadraService,
              private router: Router) {
  }


    calendarOptions:CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin],
    height: 550,
    aspectRatio: 1,
    initialView: 'dayGridMonth',
    headerToolbar: {
      start: 'prev, next, today',
      center: 'title',
      end: 'dayGridMonth, timeGridWeek, timeGridDay',
    },
    editable: true,
    themeSystem: 'bootstrap5',
    handleWindowResize: true,
    locale: 'pt-br',
    locales: [ptBrLocale],
    dateClick: this.changeView.bind(this),
    eventClick: this.handleEventClick.bind(this),
  };

  loadEvents(id_quadra: any): void {
    this.agendaService.getHorariosQuadra(id_quadra).subscribe((data) => {
      this.calendarOptions.events = data.horarios.map((item:any) => {
        return { id: item.id, start: item.start, id_quadra: item.id_quadra, end: item.end, title: item.title, color:item.color, textColor:"white", description: item.description}
      })
    })
  }

  handleEventClick(clickInfo: EventClickArg) {
   this.dialog.open(EditarEventoComponent,{disableClose: true, height: '40%',width: '60%', data:{info: clickInfo, quadra: this.quadra_selecionada}})
  }

  changeView(info: DateClickArg) {
    if(info.view.type == 'dayGridMonth') {
      info.view.calendar.changeView('timeGridDay',info.dateStr)
    }else{
      this.dialog.open(CriarEventoComponent, {disableClose: true, height: '40%',width: '60%', data:{info: info, id_quadra:this.id_quadra, quadras: this.quadra_selecionada}})
    }
  }



  ngOnInit(): void {
    this.quadraService.getQuadras().subscribe(data => {
      if (data) {
        this.quadras = data.quadras
      }
    }, error => console.error(error))
    this.id_quadra = this.activeRoute.snapshot.params['id']
    this.loadEvents(this.id_quadra)
    this.agendaService.salvar.subscribe(data => {
      if (data){
        this.loadEvents(this.activeRoute.snapshot.params['id'])
      }
    })
  }


  alterarQuadraSelecionada(data: any) {
    let id = data === 'Gauchinho' ? 1 : data === 'Arena 57' ? 2 : data === 'Quadra Unibol' ? 3 : 0
    this.quadra_selecionada = id === 1 ? 'Gauchinho' : id === 2 ? 'Arena 57' : id === 3 ? 'Quadra Unibol' : 'Quadra Invalida'
    this.router.navigateByUrl(`/agenda/${id}`)
    this.loadEvents(id)
  }
}
