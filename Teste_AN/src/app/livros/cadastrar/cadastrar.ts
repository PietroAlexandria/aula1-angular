import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  standalone: false,
  templateUrl: './cadastrar.html',
  styleUrl: './cadastrar.css'
})
export class Cadastrar {

  nome = 'Pietro';

  caminhoImagem = '';

  dizerOi(){
    this.nome = 'Olá Quarto Termo A';
  }

  listaItens = ['Maçã', 'Banana', 'Laranja'];

  isDestaque = 'true';
  hasError = 'false';

  corFundo = yellow;

  mostrarMensagem = false;

  toggleMensagem(){
    this.mostrarMensagem = !this.mostrarMensagem;
    this.isDestaque = !this.isDestaque;
    this.hasError = !this.hasError;
  }

}
