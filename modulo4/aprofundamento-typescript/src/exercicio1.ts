// a)

const minhaString: string = 12

// Type 'number' is not assignable to type 'string'. Ou seja, O tipo 'number' não pode ser atribuído ao tipo 'string'

// b)

const meuNumero: number | string = "dois"

// No caso conseguimos fazer com que a variável também aceite strings usando o Union Type

// c)

enum corFavorita {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta"
}

type person = {
    nome: string,
    idade: number,
    corFavorita: string
}

const pessoa1: person = {
    nome: "Pessoa1",
    idade: 22,
    corFavorita: corFavorita.VERMELHO
}

const pessoa2: person = {
    nome: "Pessoa2",
    idade: 23,
    corFavorita: corFavorita.AMARELO
}

const pessoa3: person = {
    nome: "Pessoa3",
    idade: 20,
    corFavorita: corFavorita.AZUL
}