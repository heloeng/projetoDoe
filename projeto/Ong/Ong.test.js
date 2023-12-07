const Ong = require("./Ong");
const Doador = require("../Doador/Doador");
const Familia = require("../Familia/Familia");
const Item = require("../Item/Item");
const ItemSolicitado = require("../Item/ItemSolicitado");

describe("Testes da classe Ong", () => {
  test("Verificar se a ong está sendo instanciada", () => {
    //setup
    const ong = new Ong();

    //ação
    //verificação
    expect(ong instanceof Ong).toBe(true);
  });

  test("Verificar se a ong está sendo excluida da lista sem problemas", () => {
    //setup
    const ong = new Ong("Ong 1", "Cuiabá");

    //ação
    operacao = ong.cadastrarOng();

    //verificação
    expect(Ong.excluirOng("Ong 1")).toBe(
      `A ong "Ong 1" foi removida da lista.`
    );
  });

  test("verificar se o nome da ong está sendo retornado sem problemas.", () => {
    //setup
    const ong = new Ong("Ong 3", "Florianópolis");

    //acao
    operacao = ong.getNomeOng();

    //verificação
    expect(operacao).toBe(ong.nome);
  });

  test("verificar se o nome da ong está sendo modificado sem problemas.", () => {
    //setup
    const ong = new Ong("Ong 3", "Florianópolis");

    //acao
    operacao = ong.setNomeOng("Ong 1");

    //verificação
    expect(ong.getNomeOng()).toBe("Ong 1");
  });

  test("verificar se a ong está na lista", () => {
    //setup
    const ong = new Ong("Ong 3", "Florianópolis");

    //acao
    //verificação
    expect(Ong.excluirOng(ong.nome)).toBe(`A ong "Ong 3" não está na lista.`);
  });

  test("Verificar se está sendo realizada a doação corretamente", () => {
    //setup
    const doacao = new Ong();
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
    doacao.realizarDoacaoParaFamilia(familia, doador);

    //verificação
    expect(familia.itensNecessarios).toEqual([{ nome: "Microondas" }]);
  });

  test("Verificar se está excluindo o item da lista sem problemas", () =>{
    //setup
    const ong = new Ong();
    const item1 = new ItemSolicitado("Geladeira");
    const item2 = new ItemSolicitado("Fogão");
    const item3 = new ItemSolicitado("Microondas");
    //ação
    ong.excluirDaListaDeItens(item1)

    //verificação
    expect(Item.listaItens).toEqual([{"nome": "Fogão","status": "Item Solicitado"}, {"nome": "Microondas", "status": "Item Solicitado"}])

  })
});
