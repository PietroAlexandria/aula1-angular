import { Component } from '@angular/core';

@Component({
  selector: 'app-estoque',
  standalone: false,
  templateUrl: './estoque.html',
  styleUrl: './estoque.css'
})
export class Estoque {

  //Lista
  listaProdutos = [
    { nome: 'Notebook', preco: 3500, estoque: 5, status: 'Disponível'},
    { nome: 'Teclado', preco: 150, estoque: 0, status: 'Disponível'},
    { nome: 'Monitor', preco: 1200, estoque: 3, status: 'Disponível'}
  ]

  //Status 
  mostrarStatus = true;

  toggleStatus(){
    this.mostrarStatus = !this.mostrarStatus;
  }

  //Botões
  btnAumentar(){
    for (let produto of this.listaProdutos){
      produto.preco = produto.preco * 1.10;
    }
  }

  btnDiminuir(){
    for (let produto of this.listaProdutos){
      produto.preco = produto.preco * 0.9;
    }
  }

}
