"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaDao = void 0;
const Pessoa_1 = __importDefault(require("./Pessoa"));
const Carro_1 = __importDefault(require("./Carro"));
class PessoaDao {
    constructor() {
        this.nomeTabela = "tb_pessoa";
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
        return new Pessoa_1.default('', '', new Carro_1.default('', 0));
    }
    selecionar(id) {
        console.log("lógica de selecionar");
        return new Pessoa_1.default('', '', new Carro_1.default('', 0));
    }
    selecionarTodos() {
        console.log("lógica de selecionarTodos");
        return [new Pessoa_1.default('', '', new Carro_1.default('', 0))];
    }
}
exports.PessoaDao = PessoaDao;
