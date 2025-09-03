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

  isDestaque = 'true';
  hasError = 'false';

  corDeFundo = 'grey';
  tamanhoFonte = 16;

  dizerOi(){
    this.nome = 'Olá Quarto Termo A';
  }

  mostrarMensagem = false;

  toggleMensagem(){
    this.mostrarMensagem = !this.mostrarMensagem;
    this.isDestaque = !this.isDestaque;
    this.hasError = !this.hasError;
  }

  listaItens = ['Maçã', 'Banana', 'Laranja'];

  alterarItens() {
    this.listaItens.push('Melancia');
  }

}
