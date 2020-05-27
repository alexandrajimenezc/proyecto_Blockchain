const Block = require('./block');
const Transaction = require('./transaccion');

class Blockchain{

    constructor(){
            this.chain =[ this.crearBloqueGenesis()];
            this.dificultad = 2;
            this.pendingTransactions=[];
            this.miningReward = 100;
    }

    crearBloqueGenesis(){
            return new Block('18/03/2020', 'Bloque Genesis','0');
    }

    getUltimoBloque(){
            return this.chain[this.chain.length - 1];
    }

    /* agregarBloque(nuevoBloque){
            nuevoBloque.hashPrevio = this.getUltimoBloque().hash;
            nuevoBloque.minarBloque(this.dificultad);
            this.chain.push(nuevoBloque);
            //nuevoBloque.hash = nuevoBloque.calcularHash();
     } */
    agregarTransaction(transaction){
        this.pendingTransactions.push(transaction);
     }

    minarTransaccionesPendientes(addressMinero){
        let block = new Block(Date.now(),this.pendingTransactions)
        block.hashPrevio =this.getUltimoBloque().hash;
        block.minarBloque(this.dificultad)

        console.log('se ha minado correctamente el bloque')

        this.chain.push(block);
        this.pendingTransactions =[
            new Transaction (null, addressMinero , this.miningReward)
        ]


    }

    getBalanceOfAddress(address){

        let balance =0;
        for (const block of this.chain){
            for(const trans of block.transactions){
                if(trans.fromAddress === address){
                    balance -= trans.amount
                }
                else if(trans.toAddress === address){
                    balance += trans.amount
                }
            }
        }
        return balance;
    }


    validarChain(){
        for(let i = 1; i< this.chain.length; i++){
        const bloqueActual = this.chain[i];
        const bloqueAnterior = this.chain[i-1];
            if (bloqueActual.hash !== bloqueActual.calcularHash()){
            return false;
            }
            else if(bloqueActual.hashPrevio !== bloqueAnterior.hash){
            return false;
            }

         }
         return true ;
         
    }


}

module.exports = Blockchain;