import Carro from './carro'
import Moto from './moto'

/* --- criar carros ---*/
let carro = new Carro('veloster', 3)
carro.acelerar()

let moto = new Moto('Honda')
moto.acelerar()
moto.acelerar()

console.log(carro)
console.log(moto)