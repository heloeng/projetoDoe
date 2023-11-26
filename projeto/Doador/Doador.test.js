const Doador = require('../Doador/Doador')

describe('Testes da classe Doador', () =>{
    test('Verificar se a instancia da classe Doador está sendo criada sem problemas.',
    () =>{
        //setup
        const doador = new Doador()

        //ação
        //verificação
        expect(doador instanceof Doador).toBe(true)
    })

    test('Verificar se está cadastrando doador corretamente', () =>{
        //setup
        const doador1 = new Doador()
        
        //acao   
        //verificacao
        expect(doador1.cadastrarPessoa('Ana', 34534234567, 'Rua V, n° 23', '(11) 99324-0433')).toBe(`Cadastro de Ana realizado com sucesso.`)
    })    

    test('Verificar se esta ocorrendo erro ao tentar cadastrar pessoa que já está cadastrada', () =>{
        //setup
        const doador1 = new Doador()

        //ação
        doador1.cadastrarPessoa('Ana', 34534234567, 'Rua V, n° 23', '(11) 99324-0433')
        
        //verificação
        expect(() => doador1.cadastrarPessoa('Ana', 34534234567, 'Rua V, n° 23', '(11) 99324-0433').toThrow('Pessoa já cadastrada'))

    })
})