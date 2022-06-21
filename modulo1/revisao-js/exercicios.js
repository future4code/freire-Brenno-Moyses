// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
const arrayOriginal = [1,2,3,4,5,6]
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
const arrayInvertido = [1,2,3,4,5,6]
function retornaArrayInvertido(array) {
  return array.reverse()
}


// EXERCÍCIO 03
const arrayCrescente = [6,5,4,3,2,1]
function retornaArrayOrdenado(array) {
  return array.sort((a,b) => a-b)

}


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


// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = 0
    for (let i = 0; i < array.length; i++)
      if (array[i] > maior)
      maior = array[i]
      return maior
}

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
   let arrayNumerosPares = []
   for (let i = 0; i < n; i++){
    arrayNumerosPares[i] = i*2
   }
        return arrayNumerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC){
        return `Equilátero`
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
        return `Isósceles`
    } else {
        return `Escaleno`
    }
        
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
   let arrayOrdenado = array.sort((a,b) => a-b)
  let arrayNovo = [arrayOrdenado[arrayOrdenado.length-2],
  arrayOrdenado[1]]
  return arrayNovo
}
   

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   const novaPessoa = {
       ...pessoa,
       nome: "ANÔNIMO",
   } 
   return novaPessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   const novoArray = pessoas.filter((elemento,indice,array) => {
    return elemento.altura >= 1.5 && elemento.idade > 14 && elemento.idade < 60
   })
   return novoArray
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const novoArray = pessoas.filter((elemento,indice,array) => {
        return elemento.altura < 1.5 || elemento.idade <= 14 || elemento.idade >= 60
       })
       return novoArray
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
// Não consegui fazer
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  // Não consegui fazer
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   // Não consegui fazer
}