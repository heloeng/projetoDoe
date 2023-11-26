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
        //setup
        const pessoa1 = new Pessoa()
        
        //acao   
        //verificacao
        expect(pessoa1.cadastrarPessoa('Ana', 34534234567, 'Rua V, n° 23', '(11) 99324-0433')).toBe(`Cadastro de Ana realizado com sucesso.`)
    })    

    test('Verificar se esta ocorrendo erro ao tentar cadastrar pessoa que já está cadastrada', () =>{
        //setup
        const pessoa1 = new Pessoa()

        //ação
        pessoa1.cadastrarPessoa('Ana', 34534234567, 'Rua V, n° 23', '(11) 99324-0433')
        
        //verificação
        expect(() => pessoa1.cadastrarPessoa('Ana', 34534234567, 'Rua V, n° 23', '(11) 99324-0433').toThrow('Pessoa já cadastrada'))


    })

})