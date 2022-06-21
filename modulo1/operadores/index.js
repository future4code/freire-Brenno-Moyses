INTERPRETAÇÃO
EXERCICIO 1

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
true&&false
false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado)
true&&false&&true
false&&true
false 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)
true||false
true

console.log("d. ", typeof resultado)
Boolean


 EXERCICIO 2

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)
primeiroNumerosegundoNumero

EXERCICIO 3

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = Number(primeiroNumero) + Number(segundoNumero)

console.log(soma)

ESCRITA
EXERCICIO 1

const idadeUsuario = prompt("Qual a sua idade?")
const idadeAmigx = prompt("Qual a idade do seu melhor amigo ou melhor amiga?")
console.log("Sua idade é maior do que a do seu melhor amigo ou amiga?", idadeUsuario>idadeAmigx)
console.log("A diferença de idade é:", idadeUsuario-idadeAmigx)

EXERCICIO 2

const numPar = prompt("Insira um número par:")
console.log("O resto da divisão do seu número por 2 é:", numPar%2)
O padrão quando é um número par: O resto é sempre 0
Quando o usario coloca um numero impar: O resto é sempre 1

EXERCICIO 3

const idadeAnos = prompt("Qual sua idade em anos?")
const idadeMeses = idadeAnos*12
const idadeDias = idadeAnos*365
const idadeHoras = idadeDias*24
console.log("Idade em meses:", idadeMeses)
console.log("Idade em dias:", idadeDias)
console.log("Idade em horas:", idadeHoras)

EXERCICIO 4

const num1 = prompt("Digite um número")
const num2 = prompt("Digite outro número")

console.log("O primeiro numero é maior que segundo?", Number(num1)>Number(num2))
console.log("O primeiro numero é igual ao segundo?", num1===num2)
console.log("O primeiro numero é divisível pelo segundo?", num1%num2===0)
console.log("O segundo numero é divisível pelo primeiro?", num2%num1===0)

DESAFIO
EXERCICIO 1

console.log("Temperatura GRAUS_FAHRENHEIT EM KELVIN:", (77 - 32)*(5/9) + 273.15,"K")
console.log("Temperatura GRAUS_CELSIUS EM GRAUS_FAHRENHEIT:", (80)*(9/5) + 32,"F")
console.log("Temperatura GRAUS_CELSIUS EM GRAUS_FAHRENHEIT/KELVIN:", (30)*(9/5) + 32,"F", 30+273,"K")
const celsius = Number(prompt("Digite um valor em celsius:"))
console.log("Temperatura GRAUS_CELSIUS do usuario EM GRAUS_FAHRENHEIT:",(celsius)*(9/5) + 32,"F")
console.log("Temperatura GRAUS_CELSIUS do usuario EM KELVIN:)", (celsius+273),"K")

EXERCICIO 2

const quilowattHora = 0.05
const residenciaQuilowatt = 280
const valorResidencia = 280*0.05
const porcentagemDesconto = 15

console.log("valor a ser pago:", residenciaQuilowatt*quilowattHora ,"R$")
console.log("Calculo do desconto:", 210/100)
console.log("valor a ser pago com desconto:", valorResidencia-2.1 ,"R$")

EXERCICIO 3

const lb = 20
let kg 
console.log("Conversão 20LB PARA KG:", kg=20/2.2046,"KG")

const oz = 10.5
let kg 
console.log("Conversão 10.5OZ PARA KG:", kg=10.5/35.274,"KG")

const mi = 100
let m
console.log("Conversão de 100MI PARA M?", m=100/0.00062137,"M")

const ft = 50
let m 
console.log("Conversão de 50FT PARA M:", m=50/3.2808,"M")

const gal = 103.56
let l
console.log("Conversão de 103.56GAL PARA L:", l=103.56/0.26417,"L")

const xic = 450
let l
console.log("Conversão de 450XIC PARA L", l=450*0.24,"L")

const xic = prompt("Digite um valor em XIC:")
let l
console.log("Conversão de XIC PARA L", l=xic*0.24,"L")



















