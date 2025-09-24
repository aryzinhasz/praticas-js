//Contagem mais "inteligente"

function contar(event) {
  event.preventDefault();
  let inicio = Number(document.getElementById("inicio").value);
  let fim = Number(document.getElementById("fim").value);
  let passo = Number(document.getElementById("passo").value);
  let res = "";

  if (passo <= 0) passo = 1;

  if (inicio < fim) {
    for (let i = inicio; i <= fim; i += passo) {
      res += i + " ";
    }
  } else {
    for (let i = inicio; i >= fim; i -= passo) {
      res += i + " ";
    }
  }

  document.getElementById("resultado").innerText = res;
}
