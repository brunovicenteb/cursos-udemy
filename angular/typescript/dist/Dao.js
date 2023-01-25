"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dao = void 0;
class Dao {
    constructor() {
        this.nomeTabela = "";
    }
    inserir(object) {
        console.log("lógica de insert");
        return true;
    }
    atualizar(object) {
        console.log("lógica de update");
        return true;
    }
    remover(id) {
        console.log("lógica de remover");
        return Object();
    }
    selecionar(id) {
        console.log("lógica de selecionar");
        return Object();
    }
    selecionarTodos() {
        console.log("lógica de selecionarTodos");
        return [Object()];
    }
}
exports.Dao = Dao;
