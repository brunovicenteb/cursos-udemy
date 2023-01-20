class Carro {
    private modelo: string
    private numeroDePortas: number
    private velocidade: number = 0

    constructor(modelo: string, numeroDePortas: number) {
        this.modelo = modelo
        this.numeroDePortas = numeroDePortas
    }

    public acelerar(): void {
        this.velocidade += 10
    }

    public parar(): void {
        this.velocidade = 0
    }

    public velocidadeAtual(): number {
        return this.velocidade
    }
}

class Concessionaria {
    private endereco: string
    private listaDeCarros: any

    constructor(endereco: string) {
        this.endereco = endereco
    }

    public fornecerEndereco(): string {
        return this.endereco;
    }

    public mostrarListaDeCarros(): any {
        return this.listaDeCarros
    }
}

class Pessoa {
    private nome: string
    private carro: any
    private carroPreferido: any

    constructor(nome: string, carroPreferido: string) {
        this.nome = nome
        this.carroPreferido = carroPreferido
    }

    public dizerNome(): string {
        return this.nome;
    }

    public dizerCarroPreferido(): any {
        return this.carroPreferido
    }

    public dizerCarrQueTem(): string {
        return this.carro
    }

    public comprarCarro(carro: any): void {
        this.carro = carro
    }
}

let concessionaria = new Pessoa('Bruno','Ferrari')
console.log(concessionaria);
console.log(concessionaria.dizerCarrQueTem());
concessionaria.comprarCarro('BMW')
console.log(concessionaria.dizerCarrQueTem());