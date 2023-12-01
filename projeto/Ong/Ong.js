class Ong {
    nome;
    cidade;
    static listaOng = [];

    constructor(nome, cidade) {
        this.nome = nome;
        this.cidade = cidade;
    }

    getNomeOng() {
        return this.nome
    }

    setNomeOng(nome) {
        this.nome = nome;
    }

    cadastrarOng() {
        Ong.listaOng.push({ nome: this.nome, cidade: this.cidade }); 
        return Ong.listaOng;
    }

}

module.exports = Ong;

