//Contando de 1 até 10 (marcando os pares)

let res = "";
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    res += "[" + i + "] ";
  } else {
    res += i + " ";
  }
}
document.getElementById("resultado").innerText = res;
