"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Concessionaria {
    constructor(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    fornecerEndereco() {
        return this.endereco;
    }
    mostrarListaDeCarros() {
        return this.listaDeCarros;
    }
    fornecerHorariosDeFuncionamento() {
        return 'De segunda a sexta das 08:00 às 18:00 e sábado das 08:00 às 12:00';
    }
}
exports.default = Concessionaria;
