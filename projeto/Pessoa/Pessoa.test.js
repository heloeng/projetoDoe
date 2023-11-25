const Pessoa = require('../Pessoa/Pessoa')

describe('Testar classe Pessoa', () =>{
    test('Verificar se a instancia da classe Pessoa', () => {
        ///setup
        const pessoa1 = new Pessoa()

        //acao

        //verificacao
        expect(pessoa1 instanceof Pessoa).toBe(true)
    })

    test('Verificar se está cadastrando pessoa corretamente', () =>{

    })

    test('Verificar se ocorre erro ao cadastrar pessoa com nome inválido', () =>{

    })

    test('Verificar se ocorre erro ao cadastrar pessoa com endereco inválido', () =>{

    })

    test('Verificar se ocorre erro ao cadastrar pessoa com contato inválido', () =>{

    })
    

})