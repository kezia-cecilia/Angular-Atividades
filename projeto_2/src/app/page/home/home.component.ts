import { Component, OnInit } from '@angular/core';
import { ServicoService } from 'src/app/service/servico.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  produtos: Array<any> = new Array();
  
  constructor(private servico: ServicoService) { }

  ngOnInit(): void {
    this.listar();  
  }

  listar() {
    this.servico.listar().subscribe(produto => {
      this.produtos = produto;
    }, error => {
      console.log("Algo de errado não está certo >>>" + error);
    });
  }
}
