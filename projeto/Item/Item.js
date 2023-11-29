class Item {
  nome;

  constructor(nome) {
    this.nome = nome;
  }

  getItem() {
    return this.nome;
  }

  setItem(nome) {
    this.nome = nome;
  }
}

module.exports = Item;
