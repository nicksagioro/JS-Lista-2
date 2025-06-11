let idade = parseInt(prompt("Qual é sua idade?"));
let deficiente = prompt("Você é portador(a) de alguma deficiência? (sim/não)").toLowerCase();
let gestante = prompt("Você é gestante? (sim/não)").toLowerCase();

if (idade > 65 || gestante === "sim" || deficiente === "sim") {
    alert("Encaminhar para fila preferencial.");
} else {
    alert("Encaminhar para a fila comum."); 
}
