const Item = require("./Item");

class ItemParaDoacao extends Item {
  constructor(nome) {
    super(nome, "Item Para Doação");
    Item.listaItens.push(this);
  }
}

module.exports = ItemParaDoacao;
