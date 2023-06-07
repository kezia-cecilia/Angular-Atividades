import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProdutoModel } from '../produtos/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {
  private url: string = "http://localhost:3000/produtos";
  
  constructor(private http: HttpClient) { }

  listarProdutos():Observable<any> {
    return this.http.get(`${this.url}`);
  }

  cadastrarProdutos(produto: ProdutoModel):Observable<any> {
    return this.http.post(`${this.url}`, produto);
  }

  Atualizar(id: any, produto: ProdutoModel): Observable<any>{
    return this.http.put(`${this.url}`.concat(id), produto)
  }
  Excluir(id: any){
    return this.http.delete(`${this.url}`.concat(id))

  }


}