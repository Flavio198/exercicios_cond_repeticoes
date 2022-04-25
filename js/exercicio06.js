let idade = Number(window.prompt("Informe a idade: "));

// A idade deve estar entre 18 e 67 e ser inteiro
if (idade >= 18 && idade <= 67 && Number.isInteger(idade)) {
  document.writeln("Voce pode doar");
  console.log("Voce pode doar");
} else {
  document.writeln("Voce não pode doar ou idade informada não é valida");
  console.log("Voce não pode doar ou idade informada não é valida");
}
