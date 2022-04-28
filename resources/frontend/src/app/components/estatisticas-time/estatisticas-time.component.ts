import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'

@Component({
  selector: 'app-estatisticas-time',
  templateUrl: './estatisticas-time.component.html',
  styleUrls: ['./estatisticas-time.component.scss']
})
export class EstatisticasTimeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    weekends: false // initial value
  };

  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
  }


}
