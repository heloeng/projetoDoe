class Pessoa{
    nome;
    contato;
    endereco;
    static listaFamilia = [];
    static listaDoador = [];

    constructor(nome, cpf, contato, endereco){
        this.nome = nome;
        this.cpf = cpf
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

    cadastrarPessoa(nome, endereco, contato){
        if(!(nome instanceof Pessoa)){
            this.setNome(nome);
            this.setEndereco(endereco);
            this.setContato(contato);
            Pessoa.listaDoador.push(Pessoa)
        }else{
            console.log('CPF já cadastrado')
        }
    }

}

module.exports = Pessoa

pessoa = new Pessoa('ana', 'teste', 'teste')
pessoa.cadastrarPessoa('ana', 'teste', 'teste')
pessoa.cadastrarPessoa('ana', 'teste', 'teste')