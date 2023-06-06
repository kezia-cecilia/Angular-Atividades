import { Component, OnInit } from '@angular/core';
import { ServicoService } from 'src/app/service/servico.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produto: Array<any> = new Array();

  constructor(private servico: ServicoService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.servico.listarProdutos().subscribe(produtos => {
      this.produto = produtos;
    }, error => {
      console.log("Erro!" + error);
    });
  }
}