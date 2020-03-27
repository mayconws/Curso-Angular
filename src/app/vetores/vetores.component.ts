import { Component } from '@angular/core';
import { Cliente } from '../entidades/cliente';
import { ServicoCliente } from '../servicos/servico.cliente';

@Component({
    selector: 'vetor-component',
    templateUrl: 'vetores.component.html',
    styleUrls: ['vetores.component.css']
})

export class VetoresComponent {

    servico : ServicoCliente = new ServicoCliente();

    constructor(servico: ServicoCliente) {
        this.servico = servico;
    }

    adicionar() : void {        

        this.servico.adicionar();

    }
    
    excluir(i:number) : void {

        this.servico.excluir(i);
    }
    
    alterar(i:number) : void {

        this.servico.alterar(i);
    }    

}