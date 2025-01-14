alert('Boas vindas ao jogo do Número Secreto!');
alert('Vamos sortear um número entre 1 e 100. Tente adivinhar qual é!');

let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
//console.log(numeroSecreto);
let numeroChute;
let tentativas = 1;

//Loop para acertar o número secreto
while (numeroChute != numeroSecreto) {
  numeroChute = prompt(`Escolha um número entre 1 e ${numeroMaximo}:`);

  if (numeroChute == numeroSecreto) {
    break;
  } else {
      if (numeroChute > numeroSecreto) {
      alert(`O número secreto é menor que o ${numeroChute}.`);
      } else {
      alert(`O número secreto é maior que o ${numeroChute}.`);
      }
      tentativas++;
  }
};

//Quantidade de tentativas para acerto
//Primeira opção
//if (tentativas > 1) {
//  alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} em ${tentativas} tentativas.`);
//} else {
  //  alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} na primeira tentativa.`);
 //   };
 //Segunda opção
 let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} em ${tentativas} ${palavraTentativa}.`);