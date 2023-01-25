import Carro from "./carro";
import ConsessionariaInterface from "./ConsessionariaInterface";

export default class Concessionaria implements ConsessionariaInterface {
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

    public fornecerHorariosDeFuncionamento(): string {
        return 'De segunda a sexta das 08:00 às 18:00 e sábado das 08:00 às 12:00';
    }
}