let sal = Number(window.prompt("Informe o salário:"));

if (sal < 1903.98) {
  document.writeln(`O valor informado é: R$ ${sal.toFixed(2)}<BR/>`);
  document.writeln(`Para o salário informado você está ISENTO DE IR`);

  window.console.log(`O valor informado é: R$ ${sal.toFixed(2)}`);
  window.console.log(`Para o salário informado você está ISENTO DE IR`);
} else {
  document.writeln(`O valor informado é: R$ ${sal.toFixed(2)}<BR/>`);
  document.writeln(`Para o salário informado você está TRIBUTADO NO IR`);

  window.console.log(`O valor informado é: R$ ${sal.toFixed(2)}`);
  window.console.log(`Para o salário informado você está TRIBUTADO NO IR`);
}
