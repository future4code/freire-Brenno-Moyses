INTERPRETAÇÃO
EXERCICIO 1

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
10
50
Não apareceria nada.

EXERCICIO 2

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

A função vai deixar todo o texto minusculo e também vai verificar se esse mesmo texto tem um certo elemento.
true
true
true

ESCRITA
EXERCICIO 1

function bio(){
    console.log("Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante.")
}
bio()

function descricao(nome,idade,cidade,profissao){
    let frase = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
    return console.log(frase)
}
descricao("Brenno",22,"Niteroi","estudante")

EXERCICIO 2

function somar(num1,num2){
    let resultado=num1+num2
    return resultado
}
console.log(somar(10,10))

function verificar(num1,num2){
    let maiorOuIgual=num1>=num2
    return maiorOuIgual
}
console.log(verificar(5,10))

function verificar(num1){
    let imparPar=num1%2===0
    return imparPar
}
console.log(verificar(10))

let texto = prompt("Digite uma mensagem:")
function modificarMensagem(mensagem){
    console.log(mensagem.length,mensagem.toUpperCase())
}
modificarMensagem(texto)

EXERCICIO 3

let valor1 = Number(prompt("Digite um valor:"))
let valor2 = Number(prompt("Digite outro valor:"))

function somar(num1,num2){
    let soma = num1+num2

    return soma 
}
function subtrair(num1,num2){
    let subtracao = num1-num2

    return subtracao
}
function multiplicar(num1,num2){
    let multiplicacao = num1*num2

    return multiplicacao
}
function dividir(num1,num2){
    let divisao = num1/num2

    return divisao
}
let resposta1 = somar(valor1,valor2)
let resposta2 = subtrair(valor1,valor2)
let resposta3 = multiplicar(valor1,valor2)
let resposta4 = dividir(valor1,valor2)

console.log(`\n Numeros inseridos ${valor1} e ${valor2} \n Soma:${resposta1}\n Subtracao:${resposta2}\n Multiplicacao:${resposta3}\n Divisao:${resposta4}`) 

DESAFIOS
EXERCICIO 1

let impressao = (num1) => console.log(num1)

let impressao2 = (num1,num2) => impressao(num1+num2)
impressao2(10,10)

EXERCICIO 2

function teorema(cat1,cat2){
    let hipotenusa = Math.hypot(cat1,cat2)
    console.log(hipotenusa)
}
teorema(5,5)






