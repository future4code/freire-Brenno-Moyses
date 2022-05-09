/*Interpretação
Exercicio 1
let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)
Resposta: 10 e 10,5

Exercicio 2
let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)
Resposta: 10,10,10

Exercicio 3
let trabalhoHoras = prompt("Quantas horas você trabalha por dia?")
let recebimentoDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${recebimentoDia/trabalhoHoras} por hora`)


Escrita

Exercicio 1
let nome 
let idade 
console.log(typeof nome, idade)
// Por não tem nenhuma atribuição, é undefined.
nome = prompt("Qual o seu nome?")
idade = prompt("Qual sua idade?")
console.log(typeof nome)
console.log(typeof idade)
console.log("Olá", nome, "você tem", idade, "anos")


Exercicio 2
let perg1 = "Foi na rua hoje?"
let perg2 = "Tomou banho hoje?"
let perg3 = "Jogou vídeo game hoje?"

let resp1 = prompt(perg1)
let resp2 = prompt(perg2)
let resp3 = prompt(perg3)

console.log(perg1,resp1)
console.log(perg2,resp2)
console.log(perg3,resp3)


Exercicio 3
let a = 10
let b = 25

c = a
a = b
b = c

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10


Desafio
let num1 = prompt("Digite um número")
let num2 = prompt("Digite mais um número")
let totalSoma = Number(num1) + Number(num2) 
let totalMulti = num1 * num2
console.log ("O primeiro número somado ao segundo número resulta em:", totalSoma)
console.log ("O primeiro número multiplicado pelo segundo número resulta em:", totalMulti)


