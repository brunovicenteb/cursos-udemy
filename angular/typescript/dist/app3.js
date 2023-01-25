"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const carro_1 = __importDefault(require("./carro"));
const moto_1 = __importDefault(require("./moto"));
const concessionaria_1 = __importDefault(require("./concessionaria"));
/* --- criar carros ---*/
let carro = new carro_1.default('veloster', 3);
carro.acelerar();
let moto = new moto_1.default('Honda');
moto.acelerar();
moto.acelerar();
console.log(carro);
console.log(moto);
let consessionaria = new concessionaria_1.default('', []);
console.log(consessionaria.fornecerHorariosDeFuncionamento());
