// INTERPRETAÇÃO
// EXERCICIO 1

const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })
  Amanda Rangel, Mandi, 0
  Lais Petra, Laura, 1
  Leticia Chijo, Chijo, 2

// //   EXERCICIO 2

  const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB)
  Amanda Rangel,Lais Petra,Leticia Chijo

//   EXERCICIO 3

  const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)
  Amanda Rangel,Mandi
  Lais Petra,Laura

//   ESCRITA
//   EXERCICIO 1


  const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const arrayNomesPets = pets.filter((nomePet) => {
     return nomePet.nome
}) 
const novoArrayNomes = arrayNomesPets.map((nomePet2) => {
    return nomePet2.nome
})
console.log(novoArrayNomes)
// ----------------------------------------------

const arraySalsichas = pets.filter((racaSalsicha) => {
    return racaSalsicha.raca === "Salsicha"
})
console.log(arraySalsichas)
// -------------------------------------------------

const arrayPoodles = pets.filter((racaPoodle) => {
    return racaPoodle.raca === "Poodle"
})
const arrayMensagemPoodles = arrayPoodles.map((nome) => {
  const nomePoodle = nome.nome
    console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${nomePoodle}`)
})
console.log(arrayPoodles)

// EXERCICIO 2

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 const novoArray = produtos.filter((produtosNomes) =>{
     produtosNomes.nome
 })
const arrayNomes = produtos.map((nomes) =>{
    return nomes.nome
}) 
console.log(arrayNomes)
// -----------------------------------------------

const nomesItens = produtos.map((nome,indice,array) =>{
    const itensComDesconto = (array[indice].preco*5)/100
    return{
        nome: array[indice].nome,
        preco: array[indice].preco - itensComDesconto
    } 
    
})
console.log(nomesItens)
// ---------------------------------------------------

const arrayBebidas = produtos.filter((produtosBebidas) =>{
    return produtosBebidas.categoria === "Bebidas"
})
console.log(arrayBebidas)
// -----------------------------------------------------

const arrayYpe = produtos.filter((nomes,indice,array) =>{
   const filtroYpe = array[indice].nome.includes("Ypê")
   return filtroYpe
})
console.log(arrayYpe)
// ---------------------------------------------------------

const arrayYpe = produtos.filter((nomes,indice,array) =>{
       const filtroYpe = array[indice].nome.includes("Ypê")
       return filtroYpe
    })
const mensagemYpe = arrayYpe.map((nomeYpe) =>{
   return (`Compre ${nomeYpe.nome} por ${nomeYpe.preco}`)
})
console.log(mensagemYpe)
