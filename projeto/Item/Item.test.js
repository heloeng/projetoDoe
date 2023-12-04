const Item = require("../Item/Item");

describe("Testes da classe Item", () => {
  test("Verificar se a instancia da classe Item está sendo criada sem problemas.", () => {
    //setup
    const item = new Item("Geladeira", "Item Para Doação");

    //ação
    //verificação
    expect(item instanceof Item).toBe(true);
  });

  test("Verificar se a lista esta sendo exibida sem problemas", () => {
    //setup
    //ação
    //verificação
    expect(Item.listaItens).toEqual([{nome: "Geladeira", status: "Item Para Doação"}]);
  });

  test("Verificar se o item está sendo excluido sem problemas", () => {
    //setup
    //ação
    Item.excluirDaLista(Item.listaItens[0]);
    //verificação
    expect(Item.listaItens).toEqual([]);
  });
});
