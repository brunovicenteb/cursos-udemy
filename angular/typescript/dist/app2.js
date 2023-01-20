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
    fornecedrEndereco() {
        return this.endereco;
    }
    mostrarListaDeCarros() {
        return this.listaDeCarros;
    }
}
let concessionaria = new Concessionaria('Avenida Paulista');
console.log(concessionaria);
