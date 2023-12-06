const Item = require("./Item");

class ItemParaDoacao extends Item {
  constructor(nome) {
    //super da classe Item recebe nome e status
    super(nome, "Item Para Doação");
    Item.listaItens.push(this);
  }
}

module.exports = ItemParaDoacao;
