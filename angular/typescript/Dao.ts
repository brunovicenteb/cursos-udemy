import { DaoInterface } from "./DaoInterface";

export class Dao<T> implements DaoInterface<T>{
    nomeTabela: String = ""

    inserir(object: T): boolean {
        console.log("lógica de insert");
        return true;
    }

    atualizar(object: T): boolean {
        console.log("lógica de update")
        return true;
    }

    remover(id: number): T {
        console.log("lógica de remover")
        return Object()
    }

    selecionar(id: number): T {
        console.log("lógica de selecionar")
        return Object()
    }

    selecionarTodos(): T[] {
        console.log("lógica de selecionarTodos")
        return [Object()]
    }
}