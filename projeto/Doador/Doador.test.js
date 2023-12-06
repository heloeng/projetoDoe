const Doador = require("../Doador/Doador");
const Item = require("../Item/Item");

describe("Testes da classe Doador", () => {
  test("Verificar se a instancia da classe Doador está sendo criada sem problemas.", () => {
    //setup
    const doador = new Doador();

    //ação
    //verificação
    expect(doador instanceof Doador).toBe(true);
  });

  test("Verificar se ocorre erro ao tentar cadastrar item não existente", () => {
    //setup
    const doador = new Doador(
      "Ana",
      "765.098.342-00",
      "(11) 9811-0000",
      "Rua B"
    );
    //ação
    //verificação
    expect(() => doador.cadastrarItemParaDoacao("Cama")).toThrow(
      "Item não cadastrado"
    );
  });

  test("Verificar se o item está sendo cadastrado sem problemas.", () => {
    //setup
    const doador = new Doador(
      "Ana",
      "765.098.342-00",
      "(11) 9811-0000",
      "Rua B"
    );
    const item = new Item("Geladeira");

    //ação
    const operacao = doador.cadastrarItemParaDoacao(item);

    //verificação
    expect(doador.itensParaDoacao).toEqual([{ nome: "Geladeira" }]);
  });

  test("Verificar se o Doador está exibindo lista corretamente.", () => {
    //setup
    const doador = new Doador(
      "Ana",
      "765.098.342-00",
      "(11) 9811-0000",
      "Rua B"
    );
    const item1 = new Item("Geladeira");
    const item2 = new Item("Fogão");

    //ação
    doador.cadastrarItemParaDoacao(item1);
    doador.cadastrarItemParaDoacao(item2);

    //verificação
    expect(doador.itensParaDoacao).toEqual([
      { nome: "Geladeira" },
      { nome: "Fogão" },
    ]);
  });

  test("Verificar se o Doador está exibindo os dados corretamente", () => {
    //setup
    const doador = new Doador(
      "Ana",
      "765.098.342-00",
      "(11) 9811-0000",
      "Rua B"
    );
    const item1 = new Item("Geladeira");
    const item2 = new Item("Fogão");

    //ação
    doador.cadastrarItemParaDoacao(item1);
    doador.cadastrarItemParaDoacao(item2);

    //verificação
    expect(doador).toEqual({
      nome: "Ana",
      contato: "(11) 9811-0000",
      endereco: "Rua B",
      itensParaDoacao: [{ nome: "Geladeira" }, { nome: "Fogão" }],
    });
  });
});
