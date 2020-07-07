const notas = [7.7, 5.7, 8.8, 9.0, 7.1, 3.6, 10];

// Sem Callback

let notasBaixas1 = [];
for (let i in notas) {
  if (notas[i] < 7) {
    notasBaixas1.push(notas[i]);
  }
}

console.log(notasBaixas1)

// Com Callback
const notasBaixas2 = notas.filter(function (nota) {
  return nota < 7
});

console.log(notasBaixas2)

// Com Callback e arrow
const notasMenorQue7 = nota => nota < 7;
const notasBaixas3 = notas.filter(notasMenorQue7);

console.log(notasBaixas3)