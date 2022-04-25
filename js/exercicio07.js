let vlr = Number(window.prompt("Informe um valor inteiro maior que zero: "));

if (vlr > 0 && Number.isInteger(vlr)) {
  document.writeln("Os números impares são: ");
  console.log("Os números impares são: ");
  for (let i = 1; i <= vlr; i++) {
    if (i % 2 != 0) {
      document.writeln(i, " ");
      console.log(i);
    }
  }
} else {
  document.writeln("O valor informado deve ser maior que zero e inteiro");
  console.log("O valor informado deve ser maior que zero e inteiro");
}
