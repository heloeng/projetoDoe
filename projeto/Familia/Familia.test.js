

const Familia = require('./Familia');

describe("Testar a Classe Familia", () => {
    test("Verificar se a instancia foi criada corretamente", () =>{
       const familia = new Familia();
       expect(familia instanceof Familia).toBe(true);
    })

    test("Retorna mensagem de sucesso ao criar usuário Familia", () =>{
        const familia = new Familia();
        expect(familia instanceof Familia).toBe(true);
     })
    
})