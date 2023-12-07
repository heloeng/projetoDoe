const Item = require("./Item");

class ItemSolicitado extends Item {
  constructor(nome) {
    super(nome, "Item Solicitado");
    Item.listaItens.push(this);
  }
}

module.exports = ItemSolicitado;
