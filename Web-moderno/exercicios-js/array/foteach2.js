Array.prototype.forEach2 = function (callback) { // Feito em aula usando objeto
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}

// forEach2 = (array) => { // Feito por mim usando função
//   for (i in array) {
//     console.log(i, array[i]);
//   }
// }
const aprovados = ['Gabriel', 'Charles', 'Vinicius', 'Leonardo']

// forEach2(aprovados)

aprovados.forEach2(function (nome, indice) {
  console.log(`${indice + 1}) ${nome}`)
})

