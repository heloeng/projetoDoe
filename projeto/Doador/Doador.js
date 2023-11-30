const Pessoa = require("../Pessoa/Pessoa");

class Doador extends Pessoa {
  itensParaDoacao = [];

  constructor(nome, cpf, contato, endereco) {
    super(nome, cpf, contato, endereco);
  }

  cadastrarItemParaDoacao(item) {
    this.itensParaDoacao.push(item);
    return this.itensParaDoacao;
  }
}

module.exports = Doador;
