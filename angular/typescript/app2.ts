import Carro from './carro'
import Pessoa from './pessoa'
import Concessionaria from './concessionaria'

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
let cliente = new Pessoa('João', 'veloster', new Carro('veloster', 3))

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro)
    }
});
console.log(cliente.dizerCarroQueTem())