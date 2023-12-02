const Pessoa = require("../Pessoa/Pessoa");
const Item = require('../Item/Item')

class Doador extends Pessoa {
  itensParaDoacao = [];

  constructor(nome, cpf, contato, endereco) {
    super(nome, cpf, contato, endereco);
  }

  cadastrarItemParaDoacao(item) {
    if (!(item instanceof Item)) {
      throw new Error("Item não cadastrado");
    }
    this.itensParaDoacao.push(item);
    return this.itensParaDoacao;
  }
}

module.exports = Doador;

