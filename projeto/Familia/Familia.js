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

}