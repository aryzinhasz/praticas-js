//Calculando a idade

let anoNasc = Number(prompt("Digite seu ano de nascimento:"));
let anoAtual = new Date().getFullYear();
let idade = anoAtual - anoNasc;
alert("Você tem " + idade + " anos.");
