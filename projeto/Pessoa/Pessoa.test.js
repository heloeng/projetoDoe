const Pessoa = require("../Pessoa/Pessoa");

describe("Testar classe Pessoa", () => {
  test("Verificar se a instancia da classe Pessoa", () => {
    ///setup
    const pessoa1 = new Pessoa();

    //acao
    //verificacao
    expect(pessoa1 instanceof Pessoa).toBe(true);
  });

  test("Verificar se o nome está retornando corretamente", () => {
    //setup
    const pessoa1 = new Pessoa(
      "Pedro",
      "758.333.222-22",
      "(22) 98455-0122",
      "Rua V"
    );

    //ação
    const operacao = pessoa1.getNome();

    //verificação
    expect(operacao).toEqual("Pedro");
  });

  test("Verificar se o nome está sendo modificado corretamente", () => {
    //setup
    const pessoa1 = new Pessoa(
      "Pedro",
      "758.333.222-22",
      "(22) 98455-0122",
      "Rua V"
    );

    //ação
    pessoa1.setNome("Henrique");

    //verificação
    expect(pessoa1.getNome()).toEqual("Henrique");
  });

  test("Verificar se o cpf está retornando corretamente", () => {
    //setup
    const pessoa1 = new Pessoa(
      "Pedro",
      "758.333.222-22",
      "(22) 98455-0122",
      "Rua V"
    );

    //ação
    const operacao = pessoa1.getCPF();

    //verificação
    expect(operacao).toEqual("758.333.222-22");
  });

  test("Verificar se o cpf está sendo modificado corretamente", () => {
    //setup
    const pessoa1 = new Pessoa(
      "Pedro",
      "758.333.222-22",
      "(22) 98455-0122",
      "Rua V"
    );

    //ação
    pessoa1.setCPF("456.988.333-77");

    //verificação
    expect(pessoa1.getCPF()).toEqual("456.988.333-77");
  });

  test("Verificar se o endereço está retornando corretamente", () => {
    //setup
    const pessoa1 = new Pessoa(
      "Pedro",
      "758.333.222-22",
      "(22) 98455-0122",
      "Rua V"
    );

    //ação
    const operacao = pessoa1.getEndereco();

    //verificação
    expect(operacao).toEqual("Rua V");
  });

  test("Verificar se o endereço está sendo modificado corretamente", () => {
    //setup
    const pessoa1 = new Pessoa(
      "Pedro",
      "758.333.222-22",
      "(22) 98455-0122",
      "Rua V"
    );

    //ação
    pessoa1.setEndereco("Rua W");

    //verificação
    expect(pessoa1.getEndereco()).toEqual("Rua W");
  });

  test("Verificar se o contato está retornando corretamente", () => {
    //setup
    const pessoa1 = new Pessoa(
      "Pedro",
      "758.333.222-22",
      "(22) 98455-0122",
      "Rua V"
    );

    //ação
    const operacao = pessoa1.getContato();

    //verificação
    expect(operacao).toEqual("(22) 98455-0122");
  });

  test("Verificar se o contato está sendo modificado corretamente", () => {
    //setup
    const pessoa1 = new Pessoa(
      "Pedro",
      "758.333.222-22",
      "(22) 98455-0122",
      "Rua V"
    );

    //ação
    pessoa1.setContato("(11) 88434-0022");

    //verificação
    expect(pessoa1.getContato()).toEqual("(11) 88434-0022");
  });
});
