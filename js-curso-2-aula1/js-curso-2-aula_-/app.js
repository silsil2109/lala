let numeroLimite = 10
let listaDeNumerosSorteados = [];
let numeroSecreto = numeroAleatorio ();
let tentativas = 1





function exibirTexto(tag,texto){
     let campo = document.querySelector(tag);
     campo.innerHTML = texto;
    
};
function mensagemInicial (){
     exibirTexto('h1', 'Jogo do Número Secreto');
     exibirTexto('p', 'Escolha um número entre 1 e 10');

}

 mensagemInicial()

function verificarChute() {
     let chute = document.querySelector('input').value;

     if (chute == numeroSecreto){
         
          let palavraTentativas = tentativas > 1? 'tentativas' : 'tentativa';
          let mensagemTentativas = `Parabéns, você acertou com ${tentativas} ${palavraTentativas}`
         
          exibirTexto ('h1', 'Você Acertou!!');
          exibirTexto('p', mensagemTentativas);

          document.getElementById ('reiniciar').removeAttribute('disabled')
     } else {
          limparInput();

          if (chute > numeroSecreto){
               exibirTexto('h1', 'O número secreto é menor ');
               
          } else {
               exibirTexto('h1', 'O número secreto é maior');
          }
          tentativas++;
          
     }
}


function limparInput(){
     chute = document.querySelector('input')
     chute.value = '';
};

function reiniciarJogo(){
     numeroSecreto = numeroAleatorio ();
     tentativas = 1
     mensagemInicial();
     limparInput();
     document.getElementById ('reiniciar').setAttribute('disabled', true)
     console.log (numeroSecreto)
}

console.log (numeroSecreto)


function numeroAleatorio() {
     let numeroEscolhido = parseInt (Math.random () * numeroLimite +1);
     
     if (listaDeNumerosSorteados.length == numeroLimite){
      listaDeNumerosSorteados = [];
      }
 
     if (listaDeNumerosSorteados.includes(numeroEscolhido)){
           return numeroAleatorio
     } else {
           listaDeNumerosSorteados.push(numeroEscolhido)
           console.log (listaDeNumerosSorteados)
           return numeroEscolhido
     };
     
 };