//Fatorial de um número

function fatorial() {
  let n = Number(document.getElementById("num").value);
  let fat = 1;
  for (let i = 1; i <= n; i++) {
    fat *= i;
  }
  document.getElementById("resultado").innerText = `Fatorial de ${n} é ${fat}`;
}
