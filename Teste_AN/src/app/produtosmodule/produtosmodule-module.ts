import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosmoduleRoutingModule } from './produtosmodule-routing-module';
import { ListaProdutosComponent } from './lista-produtos-component/lista-produtos-component';
import { BotaoComponent } from '../sharedmodule/botao-component/botao-component';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule-module';


@NgModule({
  declarations: [
    ListaProdutosComponent
  ],
  imports: [
    CommonModule,
    ProdutosmoduleRoutingModule,
    SharedmoduleModule
  ]
})
export class ProdutosmoduleModule { }
