const Item = require("../Item/Item");

describe("Testes da classe Item", () => {
  test("Verificar se a instancia da classe Item está sendo criada sem problemas.", () => {
    //setup
    const item = new Item();

    //ação
    //verificação
    expect(item instanceof Item).toBe(true);
  });

  test("Verificar se o item está sendo retornado sem problemas", () => {
    //setup
    const item = new Item("Geladeira");

    //ação
    operacao = item.getItem();
    //verificação
    expect(operacao).toBe("Geladeira");
  });

  test("Verificar se o item está sendo modificado sem problemas", () => {
    //setup
    const item = new Item("Geladeira");

    //ação
    operacao = item.setItem("Lavadora");
    //verificação
    expect(item.getItem()).toEqual("Lavadora");
  });
});
