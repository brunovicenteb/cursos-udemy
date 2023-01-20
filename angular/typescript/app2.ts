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
    private listaDeCarros: Carro[]

    constructor(endereco: string, listaDeCarros: Carro[]) {
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }

    public fornecerEndereco(): string {
        return this.endereco;
    }

    public mostrarListaDeCarros(): Carro[] {
        return this.listaDeCarros
    }
}

class Pessoa {
    private nome: string
    private carro: Carro
    private carroPreferido: string

    constructor(nome: string, carroPreferido: string) {
        this.nome = nome
        this.carroPreferido = carroPreferido
    }

    public dizerNome(): string {
        return this.nome;
    }

    public dizerCarroPreferido(): string {
        return this.carroPreferido
    }

    public dizerCarrQueTem(): Carro {
        return this.carro
    }

    public comprarCarro(carro: Carro): void {
        this.carro = carro
    }
}

/* --- criar carros ---*/
let carrA = new Carro('dodge journey', 4)
let carrB = new Carro('veloster', 3)
let carrC = new Carro('cerrato', 4)


/* --- montar a lista de carros da concessionária ---*/
let listaDeCarros: Carro[] = [carrA, carrB, carrC]

let concessionaria = new Concessionaria('Av Paulista', listaDeCarros)

/* --- exibir a lista de carros ---*/

console.log(concessionaria.mostrarListaDeCarros())

/* --- comprar o carro ---*/
let cliente = new Pessoa('João', 'veloster')

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro)
    }
});
console.log(cliente.dizerCarrQueTem())