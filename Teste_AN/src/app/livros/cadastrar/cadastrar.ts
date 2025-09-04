import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  standalone: false,
  templateUrl: './cadastrar.html',
  styleUrl: './cadastrar.css',
})
export class Cadastrar {

  nome = 'Pietro';

  caminhoImagem = '';

  isDestaque = true;
  hasError = false;

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

  textShibaInu = 'O Shiba Inu é a menor das seis raças de cães spitz originais e distintas do Japão. Um cão pequeno e ágil que se adapta muito bem a terrenos montanhosos, o Shiba Inu foi originalmente criado para a caça.'

  textChihuahua = `O Chihuahua é uma raça mexicana de cão miniatura. 
  Seu nome é uma homenagem ao estado mexicano de Chihuahua e está entre as menores raças de cães. 
  Geralmente é mantido como animal de companhia ou para exposições.`;

}
