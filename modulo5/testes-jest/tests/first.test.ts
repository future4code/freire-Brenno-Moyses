    import {IUser, toUpperCase} from "./Exercicios/exercicios"
    import {toSplit} from "./Exercicios/exercicios"
    import {toNumber} from "./Exercicios/exercicios"
    import {getLength} from "./Exercicios/exercicios"
    import {randomNumberBetween1And10} from "./Exercicios/exercicios"
    import {users} from "./Exercicios/exercicios"

describe ("Retornar a string em letras maiusculas", () => {
    test("A entrada 'desenvolvedor', retorna 'DESENVOLVEDOR'", () => {

        const input = "desenvolvedor";
        const result = toUpperCase(input)

        expect(result).toBe("DESENVOLVEDOR");   
    })
})

describe ("Retornar um array de strings", () => {
    test("A entrada 'futebol', retorna as letras dentro de um array ", () => {
        const input = "futebol";
        const result = toSplit(input)

        expect(result).toEqual(["f","u","t","e","b","o","l"])
    })
})

describe ("Retornar o conteudo da entrada em formato number", () => {
    test("A entrada '200', retorna em number", () => {
        const input = "200";
        const result = toNumber(input)

        expect(result).toEqual(200)
    })
})

describe ("Retornar a quantidade de letras da entrada", () => {
    test("A entrada 'Olá' retorna a quantidade de letras", () => {
        const input = "Olá";
        const result = getLength(input)

        expect(result).toEqual(3)
    })
})

describe ("Retornar a quantidade de letras da entrada", () => {
    test("A entrada 'Olá' retorna a quantidade de letras", () => {
        const input = "Olá";
        const result = getLength(input)

        expect(result).toEqual(3)
    })
})

describe ("Retornar um número aleatorio entre 1 e 10", () => {
    test("Deve retornar um numero aleatorio entre 1 e 10", () => {
        
        const result = randomNumberBetween1And10()
        expect(result).toBeGreaterThanOrEqual(1)
        expect(result).toBeLessThanOrEqual(10)
    })
})

describe ("Garantir que o Astrodev está na lista", () => {
    test("Gerar uma saida garantindo que o Astrodev esta nela", () => {
        const user: IUser  = {
            id: "2",
            name: "Astrodev",
            age: 33
        };

        const result = users();
        expect(result).ToContainEqual(user)
    })
})



