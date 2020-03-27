import { Component } from '@angular/core';

@Component({
    selector: 'soma-component',
    templateUrl: 'soma.component.html',
    styleUrls: ['soma.component.css']
})

export class SomaComponent {

    num1 : number = 0;
    num2 : number = 0;
    num3 : number = 0;
    num4 : number = 0;

    somar() : void {

        let total = Number(this.num1) + Number(this.num2);

        alert('A soma dos números: ' + total);
    }

    par() : void {
        
        if(this.num3 % 2 ==0) {
            alert('O Número é Par!')

        } else {
            alert('O Número é Impar!')
        }
    }

    positivo() : void {

        if(this.num4 < 0) {
            alert('O Número é Negativo!')

        } else {
            alert('O Número é Positivo!')
        }

    }

}