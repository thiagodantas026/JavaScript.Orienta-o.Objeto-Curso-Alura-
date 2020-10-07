//Classe abstrata

export class Conta{

    constructor(saldoInicial,cliente,agencia){
        
        if(this.constructor == Conta){
            throw new Error("Você não deveria instancias um objeto do tipo Conta Diretamente,pois essa é uma classe abstrata");
        }    

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia; 
    }

    set cliente( novoValor ){
        if(novoValor instanceof Cliente)
        this._cliente = novoValor;
    } 

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    //Método abstrato
    sacar(valor) {
        throw new Error ("O método Sacar da conta é abstrator");
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        taxa = 1.1 * valor;
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valorSacado;
        }
        return 0;
    }
    //metodo deposito
    deposita(valor) {
    
            this._saldo += valor;
        }

     //metodo trasnferir
     trasferir(valor,conta){

        const valorSacado = this.sacar(valor);
        conta.deposita(valorSacado);
     }   



}