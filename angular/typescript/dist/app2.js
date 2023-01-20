"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const carro_1 = __importDefault(require("./carro"));
const pessoa_1 = __importDefault(require("./pessoa"));
const concessionaria_1 = __importDefault(require("./concessionaria"));
/* --- criar carros ---*/
let carrA = new carro_1.default('dodge journey', 4);
let carrB = new carro_1.default('veloster', 3);
let carrC = new carro_1.default('cerrato', 4);
/* --- montar a lista de carros da concessionária ---*/
let listaDeCarros = [carrA, carrB, carrC];
let concessionaria = new concessionaria_1.default('Av Paulista', listaDeCarros);
/* --- exibir a lista de carros ---*/
console.log(concessionaria.mostrarListaDeCarros());
/* --- comprar o carro ---*/
let cliente = new pessoa_1.default('João', 'veloster', new carro_1.default('veloster', 3));
concessionaria.mostrarListaDeCarros().map((carro) => {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
