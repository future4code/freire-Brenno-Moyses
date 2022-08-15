// EXERCICIO 1

// a)

// Acessamos esses parâmetros  por meio do process.argv

// b) 

console.log("Olá,", process.argv[2], "Você tem", process.argv[3], "anos.")

// // c)

const valor = Number(process.argv[3]) + 7

console.log("Olá,", process.argv[2], "Você tem", process.argv[3], "anos.", "Em sete anos você terá", valor)