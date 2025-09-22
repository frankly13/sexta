function calcularDiferenca() {
  // Pega os valores digitados
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);

  // Calcula a diferença absoluta (sempre positiva)
  let diferenca = Math.abs(n1 - n2);

  // Mostra o resultado na página
  document.getElementById("resultado").innerText = "A diferença é: " + diferenca;
}

