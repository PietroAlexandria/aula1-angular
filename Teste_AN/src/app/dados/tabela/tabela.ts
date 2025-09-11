import { Component } from '@angular/core';
import { Produto } from '../modelo/Produto';

@Component({
  selector: 'app-tabela',
  standalone: false,
  templateUrl: './tabela.html',
  styleUrl: './tabela.css'
})
export class Tabela {

  displayedColumns: string[] = ['nome', 'valor'];

  dataSource: Produto[] = [
    {nome: 'Produto 1', valor: 10},
    {nome: 'Produto 2', valor: 20},
    {nome: 'Produto 3', valor: 30}
  ]

}
