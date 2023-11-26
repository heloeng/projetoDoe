const Pessoa = require('../Pessoa/Pessoa')

class Doador extends Pessoa{

    listaDeItens = []

    doarItem(item){
        if(this.verificarSeItemJaEstaNaLista === true){
            
        } else{
            this.listaDeItens.push({Item: item, Doador: super.getNome()});
            return 'Item cadastrado para doação'
        }
    }

    verificarSeItemJaEstaNaLista(item){
        for(let i = 0; i < this.listaDeItens.length; i++){
            if(item === this.listaDeItens[i]){
                return true;
            }
        }
    }
}

module.exports = Doador

