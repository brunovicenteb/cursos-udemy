"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Carro_1 = __importDefault(require("./Carro"));
const Moto_1 = __importDefault(require("./Moto"));
const Concessionaria_1 = __importDefault(require("./Concessionaria"));
/* --- criar carros ---*/
let carro = new Carro_1.default('veloster', 3);
carro.acelerar();
let moto = new Moto_1.default('Honda');
moto.acelerar();
moto.acelerar();
console.log(carro);
console.log(moto);
let consessionaria = new Concessionaria_1.default('', []);
console.log(consessionaria.fornecerHorariosDeFuncionamento());
