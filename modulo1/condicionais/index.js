// INTERPRETAÇÃO
// EXERCICIO 1

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// Está calculando se o resto do calculo envolvendo o numero do usuario é igual a 0
// Para numeros par
// Para numeros impar

// EXERCICIO 2

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// Serve para mostrar o preço da fruta que o usuario desejar
// "O preço da fruta Maçã é R$2.25"
// Vai mostrar que o preço da Maçã é 5(preço do default)

// EXERCICIO 3

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// Está pedindo um numero para o usuario
// A mensagem seria = "Esse numero passou no teste". Se fosse -10 não teria mensagem pois não tem else
// Haveria erro pois a mensagem está no escopo filho

// ESCRITA
// EXERCICIO 1

const idadeUsuario = Number(prompt("Digite a sua idade:"))
if (idadeUsuario >= 18){
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
}

// EXERCICIO 2

const turnoAluno = prompt("Qual turno você estuda? M/V/N")
if (turnoAluno === "M"){
    console.log("Bom dia!")
} else if (turnoAluno === "V"){
    console.log("Boa tarde!")
} else {
    console.log("Boa noite!")
}

// EXERCICIO 3

const turnoAluno = prompt("Qual turno você estuda? M/V/N")
switch(turnoAluno){
case "M":
    console.log("Bom dia!")
    break;
case "V":
    console.log("Boa tarde!")
    break;
case "N":
    console.log("Boa noite!")
}

// EXERCICIO 4

const generoFilmeUsuario = prompt("Digite o genero de filme que quer assistir")
const valorIngressoUsuario = prompt("Digite o valor do ingresso")
if(generoFilmeUsuario === "fantasia" && valorIngressoUsuario < 15 ){
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme!")
}

// DESAFIOS
// EXERCICIO 1

const generoFilmeUsuario = prompt("Digite o genero de filme que quer assistir")
const valorIngressoUsuario = prompt("Digite o valor do ingresso")
if(generoFilmeUsuario === "fantasia" && valorIngressoUsuario < 15 ){
    const lanche = prompt("Qual lanche vai comer?")
    console.log("Bom filme!")
    console.log(`Aproveite seu ${lanche}`)

} else {
    console.log("Escolha outro filme!")
}

// EXERCICIO 2

const nomeUsuario = prompt("Digite o seu nome:")
const tipoDeJogo = prompt("Qual tipo de jogo? IN/DO")
const etapaDoJogo = prompt("Qual a etapa do jogo? SF/DT/FI")
const categoria = prompt("Qual categoria? 1/2/3/4")
const quantidadeIngressos = prompt("Quantos ingressos?")
let valorIngresso 

if(etapaDoJogo === "SF" && categoria === "1"){
    valorIngresso = 1320
} else if (etapaDoJogo === "SF" && categoria === "2"){
    valorIngresso = 880
} else if (etapaDoJogo === "SF" && categoria === "3"){
    valorIngresso = 550
} else if (etapaDoJogo === "SF" && categoria === "4"){
    valorIngresso = 220
} else if (etapaDoJogo === "DT" && categoria === "1"){
    valorIngresso = 660
} else if (etapaDoJogo === "DT" && categoria === "2"){
    valorIngresso = 440
} else if (etapaDoJogo === "DT" && categoria === "3"){
    valorIngresso = 330
} else if (etapaDoJogo === "DT" && categoria === "4"){
    valorIngresso = 170
} else if (etapaDoJogo === "FI" && categoria === "1"){
    valorIngresso = 1980 
} else if (etapaDoJogo === "FI" && categoria === "2"){
    valorIngresso = 1320
} else if (etapaDoJogo === "FI" && categoria === "3"){
    valorIngresso = 880
} else if (etapaDoJogo === "FI" && categoria === "4"){
    valorIngresso = 330
}

if(tipoDeJogo === "DO"){
    const valorTotal = valorIngresso*quantidadeIngressos
    console.log(`
    ---Dados da compra--- 
    Nome do cliente: ${nomeUsuario}
    Tipo do jogo: ${tipoDeJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria} 
    Quantidade de Ingressos: ${quantidadeIngressos} 
    ---Valores--- 
    Valor do ingresso:${valorIngresso}
    Valor total:R$${valorTotal}
    
    `)
} else if (tipoDeJogo === "IN"){
    const valorDolar = valorIngresso*4.10
    const valorTotalDolar = valorIngresso*quantidadeIngressos
    console.log(`
    ---Dados da compra--- 
    Nome do cliente: ${nomeUsuario}
    Tipo do jogo: ${tipoDeJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria} 
    Quantidade de Ingressos: ${quantidadeIngressos} 
    ---Valores--- 
    Valor do ingresso:U$${valorDolar}
    Valor total:U$${valorTotalDolar}
    `)
}

