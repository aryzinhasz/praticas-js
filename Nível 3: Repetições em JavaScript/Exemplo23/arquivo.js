//Contando de 1 até 10 (mostrando só os pares)

let res = "";
for (let i = 2; i <= 10; i += 2) {
  res += i + " ";
}
document.getElementById("resultado").innerText = res;
