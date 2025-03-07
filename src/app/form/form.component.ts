import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
})
export class FormComponent {
  peso: number = 0;
  altura: number = 0;
  total: number= 0;
  imc: string = ' ';

  birosca() {
      if (this.peso > 0 && this.altura > 0) {
      const alturaMetros = this.altura / 100;
      this.total = this.peso / (alturaMetros * alturaMetros); 

      if (this.total < 17){
        this.imc = 'abaixo do peso!';
      }

      if (this.total >= 18){
        this.imc = 'peso normal'
      }
      
      if(this.total <= 24){
        this.imc = 'peso normal'
      }

      if(this.total >= 25){
        this.imc = 'sobrepeso'
      }

      if(this.total <= 29){
        this.imc = 'sobrepeso'
      }

      if(this.total >= 30){
        this.imc = 'obesidade grau I'
      }

      if(this.total <= 34){
        this.imc = 'obesidade grau I'
      }

      if(this.total >= 35){
        this.imc = 'obesidade grau II'
      }

      if(this.total <= 39){
        this.imc = 'obesidade grau II'
      }

      if(this.total > 40){
        this.imc = 'obesidade grau III'
      }
    } else{
      this.total = 0;
    }
 

  }
}
