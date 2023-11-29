class Pessoa {
    nome
    contato
    endereco
    #cpf
  
  
    constructor(nome, cpf, contato, endereco) {
      this.nome = nome
      this.#cpf = cpf
      this.contato = contato
      this.endereco = endereco
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
  