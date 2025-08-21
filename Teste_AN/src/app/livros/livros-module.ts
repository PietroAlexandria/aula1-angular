import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivrosRoutingModule } from './livros-routing-module';
import { Cadastrar } from './cadastrar/cadastrar';
import { Listar } from './listar/listar';


@NgModule({
  declarations: [
    Cadastrar,
    Listar
  ],
  imports: [
    CommonModule,
    LivrosRoutingModule
  ]
})
export class LivrosModule { }
