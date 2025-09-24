//Qual é o maior?

let a = Number(prompt("Digite o primeiro número:"));
let b = Number(prompt("Digite o segundo número:"));

if (a > b) {
  alert("O maior é " + a);
} else if (b > a) {
  alert("O maior é " + b);
} else {
  alert("Os dois são iguais!");
}
