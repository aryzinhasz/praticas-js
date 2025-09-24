//Tabuada

function tabuada() {
  let n = Number(document.getElementById("num").value);
  let res = "";
  for (let i = 1; i <= 10; i++) {
    res += `${n} x ${i} = ${n * i}\n`;
  }
  document.getElementById("resultado").innerText = res;
}
