import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivrosRoutingModule } from './livros-routing-module';
import { Cadastrar } from './cadastrar/cadastrar';
import { UsuariosModule } from '../usuarios/usuarios-module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatChipsModule} from '@angular/material/chips';


@NgModule({
  declarations: [
    Cadastrar
  ],
  imports: [
    CommonModule,
    LivrosRoutingModule,
    UsuariosModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatChipsModule
  ],
  exports: [
    Cadastrar
  ]
})
export class LivrosModule { }
