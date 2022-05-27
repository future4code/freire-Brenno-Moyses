console.log("Boas vindas ao jogo de Blackjack!")
if(confirm("Quer iniciar uma nova rodada?")) {
   const cartaUsuario = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
   const cartaUsuario2 = comprarCarta();
   const pontuacaoUsuario = cartaUsuario.valor + cartaUsuario2.valor
   const cartasJogador = console.log(`Usuário - cartas:${cartaUsuario.texto} ${cartaUsuario2.texto} - pontuação ${pontuacaoUsuario}`)
   const cartaComputador = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
   const cartaComputador2 = comprarCarta();
   const pontuacaoComputador = cartaComputador.valor + cartaComputador2.valor
   const cartasComputador = console.log(`Computador - cartas:${cartaComputador.texto} ${cartaComputador2.texto} - pontuação ${pontuacaoComputador}`)
   if(pontuacaoUsuario > pontuacaoComputador) {
      console.log("O usuário ganhou!")
   } else if(pontuacaoComputador > pontuacaoUsuario){
      console.log("O computador ganhou!")
   } else if(pontuacaoUsuario = pontuacaoComputador){
      console.log("Empate!")
   }
   
} else {
   console.log("O jogo acabou")
}



	


















/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

