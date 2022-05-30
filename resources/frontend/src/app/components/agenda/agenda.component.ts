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


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  public eventos: any
  public eventSources: any;

  constructor(private agendaService: AgendaService,
              public dialog: MatDialog) { }


    calendarOptions:CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin],
    height: 510,
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

  loadEvents(): void {
    this.agendaService.getHorariosQuadra().subscribe((data) => {
      this.calendarOptions.events = data.horarios.map((item:any) => {
        return {start: item.start, end: item.end, title: item.title, color:item.color, textColor:"white"}
      })
    })
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.id}'`)) {
      clickInfo.event.remove();
    }
  }

  changeView(info: DateClickArg) {
    if(info.view.type == 'dayGridMonth') {
      info.view.calendar.changeView('timeGridDay',info.dateStr)
    }else{
      this.dialog.open(CriarEventoComponent)
    }
  }

  ngOnInit(): void {
    this.loadEvents()
  }
}
