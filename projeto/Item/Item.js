

class Item {
  nome;
  status;
  static listaItens = []


  constructor(nome, status) {
    this.nome = nome;
    this.status = status
    Item.listaItens.push(this)
  }

  static listarTodosItens() {
    return Item.listaItens;
  }


  static listarItensPorStatus(tipo) {
    return Item.listaItens.filter(item => item.status === tipo)
  }



  static excluirDaLista(item) {
    const index = Item.listaItens.indexOf(item)
    if (index !== -1) {
      Item.listaItens.splice(index, 1)
      console.log(`O item "${item}" foi removido da lista.`)
    } else {
      console.log(`O item "${item}" não está na lista.`)
    }
  }
}

module.exports = Item;


