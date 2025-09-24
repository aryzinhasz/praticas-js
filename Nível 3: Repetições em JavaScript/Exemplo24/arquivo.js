//Contagem regressiva de 10 até 1

let res = "";
for (let i = 10; i >= 1; i--) {
  res += i + " ";
}
document.getElementById("resultado").innerText = res;
