import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { SobreComponent } from './page/sobre/sobre.component';
import { MenuComponent } from './sharepage/menu/menu.component';
import { RodapeComponent } from './sharepage/rodape/rodape.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ContatosComponent } from './page/contatos/contatos.component';
import { ProdutosComponent } from './produtos/produtos/produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent,
    MenuComponent,
    RodapeComponent,
    ContatosComponent,
    ProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }