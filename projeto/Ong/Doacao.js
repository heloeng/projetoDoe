
class Doacao {

    realizarDoacaoParaFamilia(familia, doador) {
      familia.itensNecessarios = familia.itensNecessarios.filter(
        (itemNecessario) => {
          const encontradoNaDoacao = doador.itensParaDoacao.find(
            (itemDoacao) => itemDoacao.nome === itemNecessario.nome
          );
          if (encontradoNaDoacao) {
            console.log(
              `${doador.nome} doou o item ${itemNecessario.nome} para ${familia.nome}`
            );
            doador.itensParaDoacao = doador.itensParaDoacao.filter(
              (item) => item.nome !== itemNecessario.nome
            );
            return false;
          }
  
          return true;
        }
      );
    }
  }
  
  module.exports = Doacao;