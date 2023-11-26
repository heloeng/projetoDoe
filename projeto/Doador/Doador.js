const Pessoa = require('../Pessoa/Pessoa')

class Doador extends Pessoa{

    listaDeItens = []

    doarItem(item){
        this.listaDeItens.push({Item: item, Doador: super.getNome()});
        return 'Item cadastrado para doação'
    }
}

module.exports = Doador

