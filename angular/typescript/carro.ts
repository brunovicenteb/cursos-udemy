import Veiculo from "./veiculo"

export default class Carro extends Veiculo {
    private numeroDePortas: number

    constructor(modelo: string, numeroDePortas: number) {
        super(modelo)
        this.numeroDePortas = numeroDePortas
    }
}