import { StringDecoder } from 'string_decoder';

export class Cliente {

    nome : String;
    telefone : String;
    email : String;

    getNome() : String {
        return this.nome;
    }

    setNome(nome:String) {
        this.nome = nome;
    }

    getTelefone() : String {
        return this.telefone;
    }

    setTelefone(telefone:String) {
        this.telefone = telefone;
    }

    getEmail() : String {
        return this.email;
    }

    setEmail(email:String) {
        this.email = email;
    }

}