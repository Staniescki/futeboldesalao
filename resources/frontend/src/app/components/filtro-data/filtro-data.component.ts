import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-filtro-data',
  templateUrl: './filtro-data.component.html',
  styleUrls: ['./filtro-data.component.scss']
})
export class FiltroDataComponent {
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
}
