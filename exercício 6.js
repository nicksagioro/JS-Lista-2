const resposta1 = "Brasília";
const resposta2 = "4";
const resposta3 = "Mercúrio";

let pergunta1 = prompt("Qual é a capital do Brasil? ");
 
if(pergunta1 == resposta1){
        alert("Resposta correta!");
}


let pergunta2 = prompt("Quanto é 2+2? ");

if(pergunta2 == resposta3){
    alert("Resposta correta!");
}
let pergunta3 = prompt("Qual é o planeta mais próximo do Sol? ");

if(pergunta3 == resposta3){
    alert("Resposta correta!");
}

else if(pergunta1 != resposta1 && pergunta2 != resposta2 && pergunta3 !=resposta3){
    alert("Você errou as respostas!")
}

alert("Fim do jogo")