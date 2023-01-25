import Carro from "./Carro"

export default class Pessoa {
    private nome: string
    private carroPreferido: string
    private carro: Carro

    constructor(nome: string, carroPreferido: string, carro: Carro) {
        this.nome = nome
        this.carro = carro
        this.carroPreferido = carroPreferido
    }

    public dizerNome(): string {
        return this.nome;
    }

    public dizerCarroPreferido(): string {
        return this.carroPreferido
    }

    public dizerCarroQueTem(): Carro {
        return this.carro
    }

    public comprarCarro(carro: Carro): void {
        this.carro = carro
    }
}