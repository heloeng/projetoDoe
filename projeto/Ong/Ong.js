const Item = require("../Item/Item");

class Ong {
  nome;
  cidade;
  static listaOng = [];

  constructor(nome, cidade) {
    this.nome = nome;
    this.cidade = cidade;
  }

  getNomeOng() {
    return this.nome;
  }

  setNomeOng(nome) {
    this.nome = nome;
  }

  cadastrarOng() {
    Ong.listaOng.push({ nome: this.nome, cidade: this.cidade });
    return Ong.listaOng;
  }

  static excluirOng(nomeDaOng) {
    const index = Ong.listaOng.findIndex((ong) => ong.nome === nomeDaOng);

    if (index !== -1) {
      Ong.listaOng.splice(index, 1);
      return `A ong "${nomeDaOng}" foi removida da lista.`;
    } else {
      return `A ong "${nomeDaOng}" não está na lista.`;
    }
  }

  realizarDoacaoParaFamilia(familia, doador) {
    familia.itensNecessarios = familia.itensNecessarios.filter(
      (itemNecessario) => {
        const encontradoNaDoacao = doador.itensParaDoacao.find(
          (itemDoacao) => itemDoacao.nome === itemNecessario.nome
        );
        if (encontradoNaDoacao) {
          console.log(
            `${doador.nome} doou o item ${itemNecessario.nome} para ${familia.nome}`
          );
          doador.itensParaDoacao = doador.itensParaDoacao.filter(
            (item) => item.nome !== itemNecessario.nome
          );
          this.excluirDaListaDeItens(itemNecessario);
          return false;
        }

        return true;
      }
    );
  }

  excluirDaListaDeItens(itemNecessario) {
    Item.listaItens = Item.listaItens.filter(
      (item) => item.nome !== itemNecessario.nome
    );
  }
}

module.exports = Ong;
