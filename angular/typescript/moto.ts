import Veiculo from "./veiculo"

export default class Moto extends Veiculo {
    public acelerar(): void {
        this.velocidade += 20
    }
}