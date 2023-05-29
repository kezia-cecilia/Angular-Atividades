import { Component, OnInit } from '@angular/core';
import { OrderSiteService } from 'src/app/servico/order-site.service';
OrderSiteService

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  private servico: OrderSiteService;

  valores: any;

  constructor(servico: OrderSiteService) {
    this.servico = servico;
  }

  ngOnInit(): void {
    this.valores = this.servico.produtoDetails;
  }
  
}
