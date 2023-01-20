"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    constructor(nome, carroPreferido, carro) {
        this.nome = nome;
        this.carro = carro;
        this.carroPreferido = carroPreferido;
    }
    dizerNome() {
        return this.nome;
    }
    dizerCarroPreferido() {
        return this.carroPreferido;
    }
    dizerCarroQueTem() {
        return this.carro;
    }
    comprarCarro(carro) {
        this.carro = carro;
    }
}
exports.default = Pessoa;
