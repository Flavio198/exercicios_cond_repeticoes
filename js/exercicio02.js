let vlr = Number(window.prompt("Informe o valor:")),
  cont = 0;

for (let i = 1; i <= vlr; i++) {
  if (vlr % i == 0) {
    cont += 1;
  }
}
if (cont == 2) {
  document.writeln(`O valor ${vlr} é primo`);

  window.console.log(`O valor ${vlr} é primo`);
} else {
  document.writeln(`O valor ${vlr} não é primo`);

  window.console.log(`O valor ${vlr} não é primo`);
}
