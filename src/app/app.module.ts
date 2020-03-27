import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InicioComponent } from './inicio/inicio.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SobreComponent } from './sobre/sobre.component';
import { Erro404Component } from './erro404/erro404.component';
import { SomaComponent } from './soma/soma.component';
import { VetoresComponent } from './vetores/vetores.component';
import { ServicoCliente } from './servicos/servico.cliente';


@NgModule({
  declarations: [
    AppComponent, InicioComponent, RodapeComponent, SobreComponent, Erro404Component, SomaComponent, VetoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServicoCliente],
  bootstrap: [AppComponent]
})
export class AppModule { }
