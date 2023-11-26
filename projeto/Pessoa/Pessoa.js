class Pessoa{
    nome;
    contato;
    endereco;
    #cpf
    listaDePessoas = []

    constructor(nome, cpf, contato, endereco){
        this.nome = nome;
        this.#cpf = cpf
        this.contato = contato;
        this.endereco = endereco;
    }

    getNome(){
        return this.nome;
    }

    setNome(novoNome){
        this.nome = novoNome;
    }

    getCPF(){
        return this.#cpf;
    }
    
    setCPF(cpf){
        this.#cpf = cpf
    }

    getContato(){
        return this.contato;
    }

    setContato(novoContato){
        this.contato = novoContato;
    }

    getEndereco(){
        return this.endereco;
    }

    setEndereco(novoEndereco){
        this.endereco = novoEndereco
    }

    cadastrarPessoa(nome, cpf, contato, endereco){
         if(this.verificarSeJaCadastrado(cpf) === true){
            throw new Error('Pessoa já cadastrada')
         } else{
            this.setNome(nome);
            this.setCPF(cpf);
            this.setContato(contato)
            this.setEndereco(endereco)
            this.listaDePessoas.push({Nome: this.getNome(), 
            CPF: this.getCPF(), 
            Contato: this.getContato(),
            Endereco: this.getEndereco()})
            return `Cadastro de ${this.getNome()} realizado com sucesso.`
        }
    }

    verificarSeJaCadastrado(cpf){
        for(let i = 0; i < this.listaDePessoas.length; i++){
            if(cpf === this.listaDePessoas[i].CPF){
                return true
            }
        }
    }

}

module.exports = Pessoa
