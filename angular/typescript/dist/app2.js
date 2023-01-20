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
/* --- criar carros ---*/
let carrA = new Carro('dodge journey', 4);
let carrB = new Carro('veloster', 3);
let carrC = new Carro('cerrato', 4);
/* --- montar a lista de carros da concessionária ---*/
let listaDeCarros = [carrA, carrB, carrC];
let concessionaria = new Concessionaria('Av Paulista', listaDeCarros);
/* --- exibir a lista de carros ---*/
console.log(concessionaria.mostrarListaDeCarros());
