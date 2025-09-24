//Pegando dados de um formulário

function mostrarDados(event) {
  event.preventDefault();
  let nome = document.getElementById("nome").value;
  let idade = document.getElementById("idade").value;
  document.getElementById("resultado").innerText =
    "Olá " + nome + ", você tem " + idade + " anos.";
}
