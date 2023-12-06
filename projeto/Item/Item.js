class Item {
  nome;
  status;
  static listaItens = [];

  constructor(nome, status) {
    this.nome = nome;
    this.status = status;
  }

  static listarTodosItens() {
    return Item.listaItens;
  }

  static listarItensPorStatus(tipo) {
    return Item.listaItens.filter((item) => item.status === tipo);
  }

  static excluirDaLista(item) {
    const index = Item.listaItens.indexOf(item);
    if (index !== -1) {
      Item.listaItens.splice(index, 1);
      return `O item "${item}" foi removido da lista.`;
    } else {
      return `O item "${item}" não está na lista.`;
    }
  }
}

module.exports = Item;
