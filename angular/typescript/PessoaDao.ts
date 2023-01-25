import Pessoa from "./Pessoa";
import { DaoInterface } from "./DaoInterface"
import Carro from "./Carro";

export class PessoaDao implements DaoInterface<Pessoa> {
    nomeTabela: String = "tb_pessoa"

    inserir(object: Pessoa): boolean {
        console.log("lógica de insert");
        return true;
    }

    atualizar(object: Pessoa): boolean {
        console.log("lógica de update")
        return true;
    }

    remover(id: number): Pessoa {
        console.log("lógica de remover")
        return new Pessoa('', '', new Carro('',0))
    }

    selecionar(id: number): Pessoa {
        console.log("lógica de selecionar")
        return new Pessoa('', '', new Carro('',0))
    }

    selecionarTodos(): Pessoa[] {
        console.log("lógica de selecionarTodos")
        return [new Pessoa('', '', new Carro('',0))]
    }
}