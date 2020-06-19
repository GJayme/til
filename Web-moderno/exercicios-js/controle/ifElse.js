const imprimirResultado = function (nota) {
  if (nota >= 7) {
    console.log(nota, 'Aprovado!')
  } else {
    console.log(nota, 'Reprovado!')
  }
}

imprimirResultado(10);
imprimirResultado(4);
imprimirResultado('Epa!'); // CUIDADO !!