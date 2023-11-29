const Item = require("../Item/Item");
const Familia = require("./Familia");

describe("Testar a Classe Familia", () => {
  test("Verificar se a instancia foi criada corretamente", () => {
    //setup
    const familia = new Familia();

    //ação
    //verificação
    expect(familia instanceof Familia).toBe(true);
  });

  test("Verificar se o item está sendo cadastrado sem problemas.", () => {
    //setup
    const familia = new Familia(
      "Mariana",
      "874.876.222-01",
      "(15) 98455-0101",
      "Rua F"
    );
    const item = new Item("Fogão");

    //ação
    operacao = familia.cadastrarNecessidade(item);

    //verificação
    expect(operacao).toEqual([{ nome: "Fogão" }]);
  });

  test("Verificar se a familia está exibindo lista corretamente.", () => {
    //setup
    const familia = new Familia(
      "Mariana",
      "874.876.222-01",
      "(15) 98455-0101",
      "Rua F"
    );
    const item1 = new Item("Fogão");
    const item2 = new Item("Microondas");

    //ação
    familia.cadastrarNecessidade(item1);
    familia.cadastrarNecessidade(item2);

    //verificação
    expect(familia.itensNecessarios).toEqual([
      { nome: "Fogão" },
      { nome: "Microondas" },
    ]);
  });
});
