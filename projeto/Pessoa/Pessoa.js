class Pessoa {
    nome
    contato
    endereco
    #cpf
<<<<<<< HEAD
    listaDePessoas = []
    static listaDeFamilia = []
    constructor(nome, cpf, contato, endereco){
        this.nome = nome;
        this.#cpf = cpf
        this.contato = contato;
        this.endereco = endereco;
=======
  
  
    constructor(nome, cpf, contato, endereco) {
      this.nome = nome
      this.#cpf = cpf
      this.contato = contato
      this.endereco = endereco
>>>>>>> 0357f62c0a0712c6bd13616ac573a3ab2e4ddbd6
    }
  
    getNome() {
      return this.nome
    }
  
    setNome(novoNome) {
      this.nome = novoNome
    }
  
    getCPF() {
      return this.#cpf
    }
  
    setCPF(cpf) {
      this.#cpf = cpf
    }
  
    getContato() {
      return this.contato
    }
  
    setContato(novoContato) {
      this.contato = novoContato
    }
  
    getEndereco() {
      return this.endereco
    }
  
    setEndereco(novoEndereco) {
      this.endereco = novoEndereco
    }
  
  }
  
  module.exports = Pessoa
  