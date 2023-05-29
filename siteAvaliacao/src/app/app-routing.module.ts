import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ContatoComponent } from './paginas/contato/contato.component';
import { SobreComponent } from './paginas/sobre/sobre.component';
InicioComponent
ContatoComponent
SobreComponent

const routes: Routes = [{ path: '', component: InicioComponent },
{ path: 'sobre', component: SobreComponent },
{ path: 'contato', component: ContatoComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
