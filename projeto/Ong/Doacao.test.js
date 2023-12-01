const Doador = require("../Doador/Doador");
const Familia = require("../Familia/Familia");
const Item = require("../Item/Item");
const Doacao = require("./Doacao");

describe("Testes da classe Ong", () => {
  test("Verificar se está sendo realizada a doação corretamente", () => {
    //setup
    const doacao = new Doacao();
    const doador = new Doador(
      "Ana",
      "765.098.342-00",
      "(11) 9811-0000",
      "Rua B"
    );
    const familia = new Familia(
      "Mariana",
      "874.876.222-01",
      "(15) 98455-0101",
      "Rua F"
    );
    const item1 = new Item("Geladeira");
    const item2 = new Item("Fogão");
    const item3 = new Item("Microondas");

    //ação
    doador.cadastrarItemParaDoacao(item1);
    doador.cadastrarItemParaDoacao(item2);
    familia.cadastrarNecessidade(item1);
    familia.cadastrarNecessidade(item3);
    doacao.verificarDoacaoParaFamilia(familia, doador);

    //verificação
    expect(familia.itensNecessarios).toEqual([{ nome: "Microondas" }]);
  });
});
