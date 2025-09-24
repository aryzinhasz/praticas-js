//Calculando média e dando 'Parabéns'

let n1 = Number(prompt("Digite a primeira nota:"));
let n2 = Number(prompt("Digite a segunda nota:"));
let media = (n1 + n2) / 2;

if (media >= 7) {
  alert("Parabéns! Sua média foi " + media);
} else {
  alert("Sua média foi " + media + ". Estude mais!");
}
