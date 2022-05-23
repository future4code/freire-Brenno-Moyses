// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
const arrayOriginal = [1,2,3,4,5,6]
function retornaTamanhoArray(array) {
   return array.length
}
console.log(retornaTamanhoArray(arrayOriginal))

// EXERCÍCIO 02
const arrayInvertido = [1,2,3,4,5,6]
function retornaArrayInvertido(array) {
  return array.reverse()
}
console.log(retornaArrayInvertido(arrayInvertido))

// EXERCÍCIO 03
const arrayCrescente = [6,5,4,3,2,1]
function retornaArrayOrdenado(array) {
  return array.sort((a,b) => a-b)

}
console.log(retornaArrayOrdenado(arrayCrescente))

// EXERCÍCIO 04

function retornaNumerosPares(array) {
    let arrayPares = []
    for (let i = 0; i < array.length; i++) {
        if (array[i]%2===0){
            arrayPares.push(array[i])
        }
    }
    return arrayPares
    }
console.log(retornaNumerosPares(arrayPares))


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {      

let arrayParesElevados = []
for (let i = 0; i < array.length; i++) {
    if (array[i]%2===0){
        arrayParesElevados.push(array[i]**2)
    }
}
return arrayParesElevados
} 
console.log(retornaNumerosParesElevadosADois(arrayParesElevados))

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = 0
    for (let i = 0; i < array.length; i++)
      if (array[i] > maior)
      maior = array[i]
      return maior
}
console.log(retornaMaiorNumero(maior))

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero = 0
    let menorNumero = 0
    let maiorDivisivelPorMenor 
    if (num1 > num2){
        maiorNumero = num1
        menorNumero = num2
    }else{
        maiorNumero = num2
        menorNumero = num1 
    }
    if (maiorNumero % menorNumero === 0){
        maiorDivisivelPorMenor = true 
    }else if (maiorNumero % menorNumero !== 0) {
       maiorDivisivelPorMenor = false
    }
    const objeto = {
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: maiorDivisivelPorMenor,
        diferenca: maiorNumero - menorNumero
    }
    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}