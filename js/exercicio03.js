let alt = Number(window.prompt("Informe sua altura:"));
// Considerando a altura da menor pessoa do mundo já registrada "Edward Niño Hernández"
if (alt >= 0.8) {
  let gnr = Number(
      window.prompt(
        "Sobre seu gênero, informe [1] para mulher e [2] para homem:"
      )
    ),
    peso;

  if (gnr == 2) {
    peso = 72.7 * alt - 58;

    document.writeln(
      `O peso ideal para homens com altura ${alt} cm é: ${peso.toFixed(2)} Kg`
    );

    window.console.log(
      `O peso ideal para homens com altura ${alt} cm é: ${peso.toFixed(2)} Kg`
    );
  } else if (gnr == 1) {
    peso = 62.1 * alt - 44.7;

    document.writeln(
      `O peso ideal para mulheres com altura ${alt} cm é: ${peso.toFixed(2)} Kg`
    );

    window.console.log(
      `O peso ideal para mulheres com altura ${alt} cm é: ${peso.toFixed(2)} Kg`
    );
  } else {
    document.writeln(`A opção informada para o genero não está disponíveis`);

    window.console.log(`A opção informada para o genero não está disponíveis`);
  }
} else {
  document.writeln("A altura informada deve ser maior ou igual a 0.8 cm");
  console.log("A altura informada deve ser maior ou igual a 0.8 cm");
}
