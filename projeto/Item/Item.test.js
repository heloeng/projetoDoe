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
    expect(Item.listaItens).toEqual([]);
  });

  test("Verificar se a função listarTodosOsItens esta exibindo a lista corretamente", () => {
    //setup
    //ação
    //verificação
    expect(Item.listarTodosItens()).toEqual([]);
  });

  test("Verificar se a listagem por status esta exibindo corretamente", () => {
    //setup
    //ação
    //verificação
    expect(Item.listarItensPorStatus()).toEqual([]);
  });

  test("Verificar se o item está sendo excluido sem problemas", () => {
    //setup
    item = new Item("Cama")
    //ação
    Item.listaItens.push(item)
    //verificação
    expect(Item.excluirDaLista(item)).toEqual(`O item "${item}" foi removido da lista.`);
  });

  test("Verificar se ocorre erro ao tentar excluir um item que não está na lista", () => {
    //setup
    //ação
    //verificação
    expect(Item.excluirDaLista("Cama")).toEqual(`O item "Cama" não está na lista.`);
  });
});
