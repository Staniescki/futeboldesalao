import { Component, OnInit } from '@angular/core';
import {QuadraService} from "../../services/quadra.service";

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.scss']
})
export class PagamentoComponent implements OnInit {

  public quadras: any

  constructor(private quadraService: QuadraService) { }

  ngOnInit(): void {
    this.quadraService.getQuadras().subscribe(data => {
      if (data) {
        this.quadras = data.quadras
      }
    }, error => console.error(error))
  }

}
