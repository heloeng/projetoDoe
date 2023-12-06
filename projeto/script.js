const Doador = require("././Doador/Doador");
const Familia = require("././Familia/Familia");
const Item = require("././Item/Item");
const ItemDoado = require("./Item/ItemDoado");
const Ong = require("./Ong/Ong");
const ItemSolicitado = require("./Item/ItemSolicitado");
const ItemParaDoacao = require("./Item/ItemParaDoacao");

const doador = new Doador("Ana", "765.098.342-00", "(11) 9811-0000", "Rua B");
const familia1 = new Familia(
  "Mariana",
  "874.876.222-01",
  "(15) 98455-0101",
  "Rua F"
);
// const familia2 = new Familia(
//   "Antonia",
//   "345.345.789-01",
//   "(15) 98465-3344",
//   "Rua L"
// );
const item1 = new ItemSolicitado("Geladeira");
const item2 = new ItemSolicitado("Fogão");
const item3 = new ItemSolicitado("Mesaa");

const item4 = new ItemParaDoacao("Fogão");
const item5 = new ItemParaDoacao("Microondas");

console.log("Itens Solicitados:", Item.listarItensPorStatus("Item Solicitado"));
console.log("Itens Doados:", Item.listarItensPorStatus("ItemDoado"));
console.log(
  "Itens Disponíveis para doação:",
  Item.listarItensPorStatus("Item Para Doação")
);
console.log("Todos os itens:", Item.listarTodosItens());

// cadastrar ong
const ong1 = new Ong("Ong1", "Poá");
const ong2 = new Ong("Ong2", "Suzano");
ong1.cadastrarOng();
//ong2.cadastrarOng();
//listar ongs
//console.log("Lista de ongs: ", Ong.listaOng);
// exlcuir ong
//Ong.excluirOng('Ong1');
//console.log('Lista de ongs atualizada: ', Ong.listaOng);

// itens que foram doados
// new ItemDoado('geladeira');
// new ItemDoado('fogão');
// new ItemDoado('cama');

// itens que foram solicitados
// new ItemSolicitado('geladeira');
// new ItemSolicitado('armário');
// new ItemSolicitado('sofá');

// itens disponivel para doação
// new ItemParaDoacao('cadeira');
// new ItemParaDoacao('mesa');
// new ItemParaDoacao('sofá');

doador.cadastrarItemParaDoacao(item4);
doador.cadastrarItemParaDoacao(item5);

familia1.cadastrarNecessidade(item1);
familia1.cadastrarNecessidade(item3);
familia1.cadastrarNecessidade(item2);

console.log(familia1);
console.log(doador);
ong1.realizarDoacaoParaFamilia(familia1, doador);
ong1.realizarDoacaoParaFamilia(familia1, doador);
console.log(familia1);
console.log(doador);

console.log("Itens Solicitados:", Item.listarItensPorStatus("Item Solicitado"));
console.log("Itens Doados:", Item.listarItensPorStatus("ItemDoado"));
console.log(
  "Itens Disponíveis para doação:",
  Item.listarItensPorStatus("Item Para Doação")
);
console.log("Todos os itens:", Item.listarTodosItens());
