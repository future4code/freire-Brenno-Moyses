// INTERPRETAÇÃO
// EXERCICIO 1

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

Está fazendo uma repetição e incrementando
10

// EXERCICIO 2

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}
[19, 21, 23, 25, 27, 30]
Não sei

// EXERCICIO 3

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}
4
4
   

// ESCRITA 
// EXERCICIO 1

const pets = Number(prompt("Quantos animais de estimação você tem?"))
if(pets == 0){
    console.log("Que pena! Você pode adotar um pet!")
} else if (pets > 0) {
    let listaPets = []
    while(listaPets.length < pets){
    let novoPet = (prompt("Digite o nome do seu pet:"))  
    listaPets.push(novoPet)
    }
console.log(listaPets)
}

// EXERCICIO 2

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
function imprimirArray(prm){
    for(let i of prm){
        console.log(i)
    }
}
imprimirArray(arrayOriginal) 


function imprimirArray(prm){
    for(let i of prm){
        let divisaoArray = i/10
        console.log(divisaoArray)
    }
}
imprimirArray(arrayOriginal)


function imprimirArray(prm){
    let listaArrayPar = []
    for(let i of prm){
        if (i%2 === 0){
            listaArrayPar.push(i)
        }
        
    }
    console.log(listaArrayPar)
}
imprimirArray(arrayOriginal)


const arrayString = (prm) => {
    let arrayPalavras = []
    for(let i of prm){
        arrayPalavras.push(`O elemento do índex ${arrayPalavras.length} é: ${i}`)
    }
    console.log(arrayPalavras)
}
arrayString(arrayOriginal)


Não consegui fazer








