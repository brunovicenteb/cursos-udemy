"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Carro_1 = __importDefault(require("./Carro"));
const Pessoa_1 = __importDefault(require("./Pessoa"));
const Concessionaria_1 = __importDefault(require("./Concessionaria"));
/* --- criar carros ---*/
let carrA = new Carro_1.default('dodge journey', 4);
let carrB = new Carro_1.default('veloster', 3);
let carrC = new Carro_1.default('cerrato', 4);
/* --- montar a lista de carros da concessionária ---*/
let listaDeCarros = [carrA, carrB, carrC];
let concessionaria = new Concessionaria_1.default('Av Paulista', listaDeCarros);
/* --- exibir a lista de carros ---*/
console.log(concessionaria.mostrarListaDeCarros());
/* --- comprar o carro ---*/
let cliente = new Pessoa_1.default('João', 'veloster', new Carro_1.default('veloster', 3));
concessionaria.mostrarListaDeCarros().map((carro) => {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
