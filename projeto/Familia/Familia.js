const Pessoa = require('../Pessoa/Pessoa')

class  Familia extends Pessoa {
    ordemDeCadastro;
    #itemNecessario;

constructor(nome, cpf, contato, endereco, ordemDeCadastro, itemNecessario){
   super(nome, cpf, contato, endereco); 
   this.ordemDeCadastro = ordemDeCadastro;
   this.#itemNecessario =  itemNecessario;
  }


getItemNecessario(){
    return this.#itemNecessario
}

setItemNecessario(novoItem){
this.#itemNecessario = novoItem
}


cadastrarFamilia(nome, cpf, contato, endereco, ordemDeCadastro, itemNecessario) {
   
    if (this.verificarSeJaCadastrado(cpf) === true) {
        throw new Error('Família já cadastrada');
    } else 
    {
     super.cadastrarPessoa(nome, cpf, contato, endereco);
        this.ordemDeCadastro = ordemDeCadastro;
        this.#itemNecessario = itemNecessario;
        Pessoa.listaDeFamilia.push({
            Nome: this.getNome(),
            CPF: this.getCPF(),
            Contato: this.getContato(),
            Endereco: this.getEndereco(),
            OrdemDeCadastro: this.ordemDeCadastro,
            ItemNecessario: this.#itemNecessario
        });
        return `Cadastro da família ${this.getNome()} realizado com sucesso.`;
    }


    
}
}

module.exports = Familia;

const familia01 = new Familia();
familia01.cadastrarFamilia('Família Mendes', '999.999.999-12', '11 99999-9999', 'Avenida Mogi das Cruzes, 218', '01', 'Fogão');

const familia02 = new Familia();
familia02.cadastrarFamilia('Família Carvalho', '999.999.999-12', '11 99999-9999', 'Avenida Mogi das Cruzes, 218', '02', 'Geladeira');

console.log(Familia.listaDeFamilia)


