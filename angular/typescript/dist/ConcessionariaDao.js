"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcessionariaDao = void 0;
const Concessionaria_1 = __importDefault(require("./Concessionaria"));
class ConcessionariaDao {
    constructor() {
        this.nomeTabela = "tb_concessionaria";
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
        return new Concessionaria_1.default('', []);
    }
    selecionar(id) {
        console.log("lógica de selecionar");
        return new Concessionaria_1.default('', []);
    }
    selecionarTodos() {
        console.log("lógica de selecionarTodos");
        return [new Concessionaria_1.default('', [])];
    }
}
exports.ConcessionariaDao = ConcessionariaDao;
