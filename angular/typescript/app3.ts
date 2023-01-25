import Carro from './Carro'
import Moto from './Moto'
import Concessionaria from './Concessionaria'

/* --- criar carros ---*/
let carro = new Carro('veloster', 3)
carro.acelerar()

let moto = new Moto('Honda')
moto.acelerar()
moto.acelerar()

console.log(carro)
console.log(moto)

let consessionaria = new Concessionaria('',[])
console.log(consessionaria.fornecerHorariosDeFuncionamento())