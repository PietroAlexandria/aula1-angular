import { Component } from '@angular/core';

@Component({
  selector: 'app-conta',
  standalone: false,
  templateUrl: './conta.html',
  styleUrl: './conta.css'
})
export class Conta {

  Valor = 0;

  Somar(){
    this.Valor++;
  }

  Subtrair(){
    this.Valor--;
    if (this.Valor < 0){
      this.Valor = 0;
    }
  }

}
