import { getSourceMapRange } from "typescript"


function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: object = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

type amostra = {
    numeros: number[]
    obterEstatisticas: number
}

// a) 

// As entradas são: const numerosOrdenados e const estatisticas.

// b)

// soma , estatisticas , numerosOrdenados

// c)



