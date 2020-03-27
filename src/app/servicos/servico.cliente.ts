import { Cliente } from '../entidades/cliente';
import { Injectable } from '@angular/core';

@Injectable()
export class ServicoCliente {

    listaClientes = new Array<Cliente>();
    cliente : Cliente = new Cliente();    

    adicionar() : void {        

        this.listaClientes.push(this.cliente);
        this.cliente = new Cliente();

    }
    
    excluir(i:number) : void {

        this.listaClientes.splice(i,1);
    }
    
    alterar(i:number) : void {

        this.cliente = this.listaClientes[i];
        this.listaClientes.splice(i,1);
    }    

}