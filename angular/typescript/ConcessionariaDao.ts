import Concessionaria from "./Concessionaria";
import { DaoInterface } from "./DaoInterface"

export class ConcessionariaDao implements DaoInterface<Concessionaria> {
    nomeTabela: String = "tb_concessionaria"

    inserir(object: Concessionaria): boolean {
        console.log("lógica de insert");
        return true;
    }

    atualizar(object: Concessionaria): boolean {
        console.log("lógica de update")
        return true;
    }

    remover(id: number): Concessionaria {
        console.log("lógica de remover")
        return new Concessionaria('', [])
    }

    selecionar(id: number): Concessionaria {
        console.log("lógica de selecionar")
        return new Concessionaria('', [])
    }

    selecionarTodos(): Concessionaria[] {
        console.log("lógica de selecionarTodos")
        return [new Concessionaria('', [])]
    }
}