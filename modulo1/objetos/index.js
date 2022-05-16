INTERPRETAÇÃO
EXERCICIO 1

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

Matheus Nachtergaele
Virginia Cavendish
canal: "Globo" horario: "14h"

EXERCICIO 2

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

nome: Juca 
idade: 3 
raca: SRD

nome: Juba
idade: 3 
raca: SRD

nome: Jubo
idade: 3 
raca: SRD

Faz uma "cópia" de outro objeto para simplificar

EXERCICIO 3 

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

False
Undefined

ESCRITA 
EXERCICIO 1--------------------

const nomeApelidos = {
    nome:"João",
    apelidos: ["Jo","Jão","Joãozinho"],
}

function nomearApelidar(arg){
    console.log(`Eu sou ${arg.nome}, mas pode me chamar de: ${arg.apelidos}`)
}

nomearApelidar(nomeApelidos)

const nomeApelidos2 = {
    ...nomeApelidos, apelidos:["Juão","Ja","Joãozão"]
}

nomearApelidar(nomeApelidos2)


EXERCICIO 2

const infoPessoa = {
    nome: "Bruno",
    idade: 23,
    profissao: "Instrutor"
}
const infoPessoa2 =  {
    nome: "João",
    idade: 26,
    profissao: "Cozinheiro",
}
function Informar(arg){
  const nome1 = arg.nome
  const caracteresNome1 = arg.nome.length
  const idade1 = arg.idade
  const profissao1 = arg.profissao
  const caracteresProfissao1 = arg.profissao.length
  const array1 = [nome1,caracteresNome1,idade1,profissao1,caracteresProfissao1]
  console.log(array1)
}
Informar(infoPessoa)

EXERCICIO 3

const carrinho = []

const fruta1 = {
    nome: "Banana",
    disponibilidade: true
}

const fruta2 = {
    nome:"Manga",
    disponibilidade: true
}

const fruta3 = {
    nome: "Uva",
    disponibilidade: true
}

function receberFruta(pam1,pam2,pam3){
    carrinho.push(pam1,pam2,pam3)
    console.log(carrinho)
}
receberFruta(fruta1,fruta2,fruta3)




    





