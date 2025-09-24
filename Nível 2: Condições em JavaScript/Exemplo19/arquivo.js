//O usuário escolhe o cálculo

let escolha = prompt(
  "Escolha uma operação: soma, subtracao, multiplicacao, divisao"
);

let a = Number(prompt("Digite o primeiro número:"));
let b = Number(prompt("Digite o segundo número:"));

switch (escolha.toLowerCase()) {
  case "soma":
    alert("Resultado: " + (a + b));
    break;
  case "subtracao":
    alert("Resultado: " + (a - b));
    break;
  case "multiplicacao":
    alert("Resultado: " + a * b);
    break;
  case "divisao":
    alert("Resultado: " + a / b);
    break;
  default:
    alert("Operação inválida!");
}
