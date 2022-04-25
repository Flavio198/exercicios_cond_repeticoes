let vlr = Number(window.prompt("Informe um valor inteiro entre 1 e 10: ")),
  prd;

if (vlr >= 1 && vlr <= 10 && Number.isInteger(vlr)) {
  for (let i = 1; i < 11; i++) {
    prd = vlr * i;
    document.writeln(`${vlr} x ${i} = ${prd}<br/>`);
    console.log(`${vlr} x ${i} = ${prd}`);
  }
} else {
  document.writeln("Valor informado não é permitido");
  console.log("Valor informado não é permitido");
}
