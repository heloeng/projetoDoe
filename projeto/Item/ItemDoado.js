const Item = require("./Item.js");

class ItemDoado extends Item {
  constructor(nome) {
    super(nome, "ItemDoado");
    Item.listaItens.push(this);
  }
}

module.exports = ItemDoado;
