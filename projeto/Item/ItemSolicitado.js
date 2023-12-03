const Item = require('./Item');

class ItemSolicitado extends Item {

    constructor(nome) {
        //super da classe Item recebe nome e status
        super(nome, 'Item Solicitado')
        Item.listaItens.push(this);
    }
  
}

module.exports = ItemSolicitado;
