"use strict";
class Carro {
    constructor(modelo, numeroDePortas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }
    acelerar() {
        this.velocidade += 10;
    }
    parar() {
        this.velocidade = 0;
    }
    velocidadeAtual() {
        return this.velocidade;
    }
}
class Concessionaria {
    constructor(endereco) {
        this.endereco = endereco;
    }
    fornecerEndereco() {
        return this.endereco;
    }
    mostrarListaDeCarros() {
        return this.listaDeCarros;
    }
}
class Pessoa {
    constructor(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    dizerNome() {
        return this.nome;
    }
    dizerCarroPreferido() {
        return this.carroPreferido;
    }
    dizerCarrQueTem() {
        return this.carro;
    }
    comprarCarro(carro) {
        this.carro = carro;
    }
}
let concessionaria = new Pessoa('Bruno', 'Ferrari');
console.log(concessionaria);
console.log(concessionaria.dizerCarrQueTem());
concessionaria.comprarCarro('BMW');
console.log(concessionaria.dizerCarrQueTem());
