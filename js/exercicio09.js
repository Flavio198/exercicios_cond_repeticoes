let soma = 0,
  cont = 0;

for (let i = 14; i < 73; i++) {
  soma += i;
  cont += 1;
}
let media = soma / cont;

document.writeln(`A média entre os números 13 e 73 é: ${media}`);
console.log(`A média entre os números 13 e 73 é: ${media}`);
