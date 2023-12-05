const Pessoa = require("../Pessoa/Pessoa");
const Item = require("../Item/Item");

class Familia extends Pessoa {
  itensNecessarios = [];

  cadastrarNecessidade(item) {
    if (!(item instanceof Item)) {
      throw new Error("Item não cadastrado");
    }
    return this.itensNecessarios.push(item) && Item.listaItens.push(item);
   
  }
}

module.exports = Familia;
