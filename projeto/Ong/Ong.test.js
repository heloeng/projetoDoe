const Ong = require("./Ong");
const Doador = require("../Doador/Doador");
const Familia = require("../Familia/Familia");
const Item = require("../Item/Item");

describe("Testes da classe Ong", () => {
  test("Verificar se a ong está sendo instanciada", () => {
    //setup
    const ong = new Ong()

    //ação
    //verificação
    expect(ong instanceof Ong).toBe(true)

  });

  test("Verificar se a ong está sendo excluida da lista sem problemas", () => {
    //setup
    const ong = new Ong("Ong 1", "Cuiabá")


    //ação
    operacao = ong.cadastrarOng()


    //verificação
    expect(Ong.excluirOng("Ong 1")).toBe(`A ong "Ong 1" foi removida da lista.`)

  });

});
