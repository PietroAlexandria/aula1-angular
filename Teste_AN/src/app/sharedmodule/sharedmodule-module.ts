import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedmoduleRoutingModule } from './sharedmodule-routing-module';
import { BotaoComponent } from './botao-component/botao-component';


@NgModule({
  declarations: [
    BotaoComponent
  ],
  imports: [
    CommonModule,
    SharedmoduleRoutingModule
  ],
  exports: [
    BotaoComponent
  ]
})
export class SharedmoduleModule { }
