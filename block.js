const SHA256 = require('crypto-js/sha256');

class Block{
    constructor(timestamp, transactions, hashPrevio=''){
            this.timestamp = timestamp;
            this.transactions = transactions;
            this.hashPrevio = hashPrevio;
            this.comodin = 0 ;
            this.hash= this.calcularHash();
    }

    calcularHash(){
        return SHA256(this.timestamp + this.hashPrevio + JSON.stringify(this.transactions) + this.comodin).toString();
    }

    minarBloque(dificultad){
        while(this.hash.substring(0,dificultad) !==Array(dificultad + 1).join('0') ){
            this.comodin++;
            this.hash = this.calcularHash();
        }
        console.log(`Bloque minado: ${this.hash}`)

    }

}


module.exports = Block