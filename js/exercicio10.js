let vlr = Number(window.prompt("Informe um valor: "));
let soma = 0;

while (soma < 500) {
  vlr *= 3;
  soma += vlr;
}
document.writeln(`Total da soma: ${soma}`);
console.log(`Total da soma: ${soma}`);
