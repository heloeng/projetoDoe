const Pessoa = require("../Pessoa/Pessoa");
const Item = require('../Item/Item')

class Doador extends Pessoa {
  itensParaDoacao = [];

  cadastrarItemParaDoacao(item) {
    if (!(item instanceof Item)) {
      throw new Error("Item não cadastrado");
    }
    this.itensParaDoacao.push(item);
    return this.itensParaDoacao;
  }
}

module.exports = Doador;

