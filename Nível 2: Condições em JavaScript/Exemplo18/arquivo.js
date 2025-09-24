//Jogo da adivinhação

let secreto = Math.floor(Math.random() * 10) + 1;
let palpite = Number(prompt("Adivinhe o número entre 1 e 10:"));

if (palpite === secreto) {
  alert("Acertou! O número era " + secreto);
} else {
  alert("Errou! O número era " + secreto);
}
