import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { SobreComponent } from './page/sobre/sobre.component';
import { ContatosComponent } from './page/contatos/contatos.component';
import { ProdutosComponent } from './produtos/produtos/produtos.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'sobre', component:SobreComponent},
  {path:'contatos', component:ContatosComponent},
  {path:'produtos', component:ProdutosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
