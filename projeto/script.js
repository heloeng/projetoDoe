const Doador = require("././Doador/Doador");
const Familia = require("././Familia/Familia");
const Item = require("././Item/Item");
const Doacao = require("./Ong/Doacao");
const Ong = require("./Ong/Ong");


const doador = new Doador("Ana", "765.098.342-00", "(11) 9811-0000", "Rua B");
const familia1 = new Familia(
  "Mariana",
  "874.876.222-01",
  "(15) 98455-0101",
  "Rua F"
);
const familia2 = new Familia(
  "Antonia",
  "345.345.789-01",
  "(15) 98465-3344",
  "Rua L"
);
const item1 = new Item("Geladeira");
const item2 = new Item("Fogão");
const item3 = new Item("Microondas");
const doacao = new Doacao();


//cadastrar ong
const ong1 = new Ong('Ong 1', 'Poá');
const ong2 = new Ong('Ong 2', 'Suzano');
 ong1.cadastrarOng()
 ong2.cadastrarOng()
//listar ongs
 console.log('Lista de ongs: ', Ong.listaOng);


doador.cadastrarItemParaDoacao(item1);
doador.cadastrarItemParaDoacao(item2);
familia1.cadastrarNecessidade(item1);
familia1.cadastrarNecessidade(item3);
familia1.cadastrarNecessidade(item2);

console.log(familia1);
console.log(doador);
doacao.realizarDoacaoParaFamilia(familia1, doador);
doacao.realizarDoacaoParaFamilia(familia1, doador);
console.log(familia1);
console.log(doador);