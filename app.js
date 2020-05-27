const Block = require('./block');
const Blockchain = require('./blockchain');
const Transaction = require('./transaccion');


let monedaCoin = new Blockchain()
/* console.log('minando bloque 1')
monedaCoin.agregarBloque(new Block('19/03/2018',{cantidad: 10}));
console.log('minando bloque 2')
monedaCoin.agregarBloque(new Block('21/03/2018',{cantidad: 40}));
console.log('minando bloque 3')
monedaCoin.agregarBloque(new Block('22/03/2018',{cantidad: 1}));
 */

//console.log(monedaCoin.validarChain())

/* 
monedaCoin.chain[1].data ={cantidad: 200}
monedaCoin.chain[1].hash =monedaCoin.chain[1].calcularHash()

console.log(monedaCoin.validarChain()) */


monedaCoin.agregarTransaction ( new Transaction('alex', 'javi',100));
monedaCoin.agregarTransaction ( new Transaction('issa', 'jose',50));

console.log('comienza el minado...')
monedaCoin.minarTransaccionesPendientes('alex');


console.log('comienza el minado...')
monedaCoin.minarTransaccionesPendientes('alex');

console.log(`el balance nuestro es ${monedaCoin.getBalanceOfAddress('alex')}`)

console.log(JSON.stringify(monedaCoin, null ,4));