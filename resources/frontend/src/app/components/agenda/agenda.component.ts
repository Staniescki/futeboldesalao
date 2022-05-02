import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import ptBrLocale from '@fullcalendar/core/locales/pt-br';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {



  constructor() { }

  calendarOptions: CalendarOptions = {
    dateClick: this.handleDateClick.bind(this),
    plugins: [dayGridPlugin, interactionPlugin],
    height: 510,
    aspectRatio: 1,
    editable: true,
    handleWindowResize: true,
    locale: 'pt-br',
    locales: [ptBrLocale],
    events: [
      { title: 'Gremio x Inter', date: '2022-04-29' },
      { title: 'Flamengo x Fluminense', date: '2022-04-30' }
    ]
  };


  handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr)
  }
  ngOnInit(): void {
  }

}
