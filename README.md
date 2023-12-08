## Como rodar o projeto
1. Clone este repositório: `git clone https://github.com/heloeng/projetoDoe.git`
2. Navegue até o diretório do projeto: `cd projeto`
3. Instale as dependências: `npm install`.


   
# Problema
O problema que buscamos resolver com a aplicação é a dificuldade que enfrentamos quando queremos doar algo a quem precisa ou quando precisamos de alguma coisa e não sabemos quem está doando.
Quem nunca teve uma coisa para doar e devido a não encontrar alguem que precisa, jogou no lixo?

# Projeto Doe

A idéia do projeto é que uma organização sem fins lucrativos gerencie um cadastro de doadores e de familias que precisam de itens como eletrodomésticos, roupas, móveis etc.
Cada doador pode incluir itens a sua lista de doações e a familia pode cadastrar itens que está precisando. Assim a organização fica responsável por intermediar a doação dos itens sem a necessidade da interação direta entre quem está doando e quem vai recebar a doação.

## Diagrama UML
<h1>
  <img src="img/UML.png" alt="Função realizar doação para familia" width="600">
</h1>

## Funcionalidades
- Cadastrar ONG
- Cadastrar doador
- Cadastrar familia
- Cadastrar item para disponibilizado para doação
- Cadastrar item que a família está precisando
- Verificar na lista do doador se tem o item que a familia precisa e em caso positivo realizar a doação
- Listar todos itens disponiveis para doação
- Listar todos itens solicitados pelas famílias

## Função realizarDoacaoParaFamilia
<h1>
  <img src="img/realizarDoacaoParaFamilia.png" alt="Função realizar doação para familia" width="600">
</h1>


## Exemplo de funcionamento 
<h1>
  <img src="img/doacao.png" alt="listas antes e depois da doação" width="400">
</h1>

## Testes unitários
<h1>
  <img src="img/tests.png" alt="lista depois da daoação" width="400">
</h1>

## Aprendizados

O principal desafio do projeto foi determinar quais as classes que seriam implementadas. 
Depois, realizar a manipulação das listas, utilizando as funções find, filter e index. Com isso 
conseguimos observar o comportamento das funções e aprendemos a utilizar cada uma delas dependendo da situação.
Alem disso, conseguimos entender melhor o funcionamento da variável static e avaliamos sua utilização dentro do projeto.

## Implementações futuras

- Cadastro de membros nas familias
- Listagem de todos os itens doados
- Busca de todos os doadores e familias para verificação de itens disponíveis e familias que estão precisando

## Autoras

- [@Heloiza Mendes](https://github.com/heloeng)
- [@Jeanne Mendes](https://github.com/jeannefernanda)
