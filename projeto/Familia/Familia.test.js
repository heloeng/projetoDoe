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

  test("Verificar se ocorre erro ao tentar cadastrar item não existente", () => {
    //setup
    const familia = new Familia(
      "Roberto",
      "765.345.444-21",
      "(11) 984532-5555",
      "Rua W"
    );
    //ação
    //verificação
    expect(() => familia.cadastrarNecessidade("Cama")).toThrow(
      "Item não cadastrado"
    );
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
    expect(familia.itensNecessarios).toEqual([{ nome: "Fogão" }]);
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
