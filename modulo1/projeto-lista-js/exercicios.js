// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura,largura) {
  let altura1 = Number(prompt("Digite uma altura:"))
  let largura1 = Number(prompt("Digite uma largura:"))
  let area = altura1*largura1
  console.log(area)
}


// EXERCÍCIO 02
function imprimeIdade(anoAtual,anoNascimento) {
  const anoAtualUsuario = prompt("Digite o ano atual:")
  const anoNascimentoUsuario = prompt("Digite o ano do seu nascimento:")
  const idade = anoAtualUsuario-anoNascimentoUsuario
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso,altura) {
  let imc = peso/(altura*altura)
  console.log(imc)
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Digite seu nome:")
  const idade = prompt("Digite sua idade:")
  const email = prompt("Digite seu email:")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Digite sua cor favorita:")
  const cor2 = prompt("Digite sua segunda cor favorita:")
  const cor3 = prompt("Digite sua terceira cor favorita:")
  console.log([cor1,cor2,cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  let string1 = string 
  return string1.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const calculo =   custo/valorIngresso
  return calculo
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const tamanho1 = string1.length
  const tamanho2 = string2.length 
  return tamanho1>=tamanho2
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
 return array[array.length-1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let primeiroIndice = array[0]
  array[0] = array[array.length-1]
  array[array.length-1] = primeiroIndice
  return array 
  
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {   
  
 let string3 = string1.toUpperCase()
 let string4 = string2.toUpperCase()
  const igualdade = string3===string4
  return igualdade
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = prompt("Qual o ano atual?")
  const anoNascimento = prompt("Qual o ano de nascimento?")
  const anoCarteira = prompt("Qual o ano de emissão da sua carteira?")
  const idade = anoAtual-anoNascimento
  const tempoEmissao = anoAtual-anoCarteira
  const menosDeVinteOuVinte = idade<=20 && tempoEmissao>=5
  const entreVinteECinquentaOuCinquenta = idade>=20 && idade<=50 && tempoEmissao>=10
  const acimaCinquentaAnos = idade>50 && tempoEmissao > 15
  const checagem = menosDeVinteOuVinte||entreVinteECinquentaOuCinquenta||acimaCinquentaAnos
  console.log(checagem)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
 



}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const idade = prompt("Voce tem mais de 18 anos?")==="sim" 
  const ensinoMedio = prompt("Voce possui ensino médio completo?")==="sim"
  const disponibilidade = prompt("Voce possui disponibilidade exclusiva durante os horarios do curso?")==="sim"
  const checagem = idade&&ensinoMedio&&disponibilidade
  console.log(checagem)
}