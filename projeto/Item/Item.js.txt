class Item {
  nome;
  static listaItens = []

  constructor(nome) {
    this.nome = nome;
  }

  getItem() {
    return this.nome;
  }

  setItem(nome) {
    this.nome = nome;
  }

  adicionarNaLista(item){
    Item.listaItens.push(item)
  }

  static excluirDaLista(item){
    const index = Item.listaItens.indexOf(item)
    if(index !== -1){
      Item.listaItens.splice(index, 1)
      console.log(`O item "${item}" foi removido da lista.`)
    } else{
      console.log(`O item "${item}" não está na lista.`)
    }
  }
}

module.exports = Item;


const item = new Item()
item.adicionarNaLista("Beliche")
item.adicionarNaLista("Fogão")
console.log(Item.listaItens)
Item.excluirDaLista("Fogão")
console.log(Item.listaItens)