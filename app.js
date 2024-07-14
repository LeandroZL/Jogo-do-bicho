let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numerodobichos = numerodobicho();
let tentativas = 1;

function exibirTextoNaTela (tag, texto) {
     let campo = document.querySelector(tag);
     campo.innerHTML = texto;
     responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}


function exibirMensagemInicial(){
     exibirTextoNaTela('h1', 'Jogo do Bicho');
     exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');


}
exibirTextoNaTela('h1', 'Jogo do Bicho');
exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');

function  verificarChute() {
     let chute = document.querySelector('input').value;

     console.log(chute == numerodobichos); 

     if (chute ==  numerodobichos) {
          exibirTextoNaTela('h1', 'Você acertou o numero do bicho');
          let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
          let mensagemTentativas = `Você descobriu o numero do bicho com ${tentativas} ${palavraTentativa}!`
     
          exibirTextoNaTela('p', mensagemTentativas);
          document.getElementById('reiniciar').removeAttribute('disabled');
} else {
     if (chute > numerodobichos) {
          exibirTextoNaTela ('p', 'O numero do bicho é menor');
     } else { 

          exibirTextoNaTela ('p', 'O numero do bicho é maior');
     } tentativas++;
     limparCampo ();
    
     
     }
     
}

function limparCampo() {

     chute = document.querySelector('input');
     chute.value = '';
}
function numerodobicho() {
    let numeroEscolhido = parseInt (Math.random() * numeroLimite + 1);
    let quantidadeDeElementoNaLista= listaDeNumerosSorteados.length;


    if (quantidadeDeElementoNaLista == numeroLimite){
     listaDeNumerosSorteados = []
    }
      if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
          return numerodobicho();
      } else { 
          listaDeNumerosSorteados.push(numeroEscolhido)
          return numeroEscolhido;
          console.log(listaDeNumerosSorteados)
      }
}
function reiniciarJogo(){


     numerodobichos = numerodobicho();
     limparCampo();
     tentativas  = 1;
     exibirMensagemInicial();
     document.geteElementeByid('reiniciar').setAttribute('disabled', true)
}
    
    




