let turno = window
  .prompt(
    "Em que turno você estuda? Digite [M] para matutino; Digite [V] para vespertino; Digite [N] para noturno"
  )
  .toLowerCase();
switch (turno) {
  case "M".toLowerCase():
    document.writeln("Bom dia!");
    console.log("Bom dia!");
    break;

  case "V".toLowerCase():
    document.writeln("Boa tarde!");
    console.log("Boa tarde!");
    break;

  case "N".toLowerCase():
    document.writeln("Boa noite!");
    console.log("Boa noite!");
    break;

  default:
    document.writeln("\n “Valor invalido");
    console.log("\n “Valor invalido");
}
