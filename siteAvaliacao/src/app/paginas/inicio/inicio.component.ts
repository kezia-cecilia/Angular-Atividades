import { Component, OnInit } from '@angular/core';
import { OrderSiteService } from 'src/app/servico/order-site.service';
OrderSiteService

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  private servico: OrderSiteService; 

  valores: any; 

  constructor(servico: OrderSiteService) {
    this.servico = servico; 
  }

  ngOnInit(): void {
    this.valores = this.servico.produtoDetails;
  }
  
}