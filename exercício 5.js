let loginCorreto = "Admin";
let senhaCorreta = "1234";
let login = prompt("Qual é seu login? ");
let senha = prompt("Qual é sua senha? ");

if(login == loginCorreto && senha == senhaCorreta) {
    alert("Acesso concedido. ")
}

else if(login != loginCorreto) {
    alert("Login incorreto. ")
}

else{ 
    alert("Senha incorreta.")
}