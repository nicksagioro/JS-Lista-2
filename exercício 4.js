let idade = prompt("Qual é sua idade? ");

if (idade < 16){
   alert("Entrada proíbida para menores de 16 anos.");
}
else if(idade >= 16 && idade < 18) {
    alert("Entrada permitida apenas com responsável.");
}

else{
    alert("Entrada liberada. ")
}