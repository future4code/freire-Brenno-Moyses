INTERPRETAÇÃO
EXERCICIO 1

let array
console.log('a. ', array)
undefined

array = null
console.log('b. ', array)
null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
11


let i = 0
console.log('d. ', array[i])
3

array[i+1] = 19
console.log('e. ', array)
3,19,5,6,7,8,9,10,11,12,13


const valor = array[i+6]
console.log('f. ', valor)
9

EXERCICIO 2

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

SUBI NUM ONIBUS EM MIRROCOS, 27

ESCRITA
EXERCICIO 1

const email = prompt("Digite o seu e-mail:")
const nome = prompt("Digite o seu nome:")

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja vem vinda(o), ${nome}`)

EXERCICIO 2

const listaComidas = ["arroz","feijão","bife","batata","lasanha"]
console.log(listaComidas)
console.log(`Essas são as minhas comidas preferidas:\n`+ listaComidas[0] + `\n` + listaComidas[1] + `\n` + listaComidas[2] + `\n` + listaComidas[3] + `\n` + listaComidas[4])
listaComidas.splice(1, 1, prompt("Digite sua comida preferida:"))
console.log(listaComidas)


EXERCICIO 3

const listaDeTarefas = []
listaDeTarefas[0] = prompt("Diga uma tarefa que voce precise realizar hoje:") 
listaDeTarefas[1] = prompt("Diga uma tarefa que voce precise realizar hoje:")
listaDeTarefas[2] = prompt("Diga uma tarefa que voce precise realizar hoje:")
console.log(listaDeTarefas)
listaDeTarefas.splice(prompt("Digite o numero de uma tarefa para remover 0/1/2"))
console.log(listaDeTarefas)

DESAFIO
EXERCICIO 1

const frase = prompt("Digite uma frase:")
const fraseSeparada = frase.split(" ")
const array = [fraseSeparada]
console.log(fraseSeparada)


EXERCICIO 2

const array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
console.log(array.indexOf("Abacaxi"), array.length)







