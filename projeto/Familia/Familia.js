const Pessoa = require("../Pessoa/Pessoa");
const Item = require("../Item/Item");

class Familia extends Pessoa {
  itensNecessarios = [];

  cadastrarNecessidade(item) {
    if (!(item instanceof Item)) {
      throw new Error("Item não cadastrado");
    }
    this.itensNecessarios.push(item);
    return this.itensNecessarios;
  }
}

module.exports = Familia;
