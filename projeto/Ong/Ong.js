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


    static excluirOng(nomeDaOng) {
        const index = Ong.listaOng.findIndex(ong => ong.nome === nomeDaOng);
    
        if (index !== -1) {
            Ong.listaOng.splice(index, 1);
        }
    
        return Ong.listaOng;
    }


}

module.exports = Ong;

