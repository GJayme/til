const filhas = ['Ualeskah', 'Cibalena'];
const filhos = ['Uoxiton', 'Uesclei'];

// Concat cria um novo array concatenando os valores dos outros array's
const todos = filhas.concat(filhos, 'Fulano');
console.log(todos, filhas, filhos);

console.log(['a', 'b'].concat([1, 2], [3, 4], 5, [[6, 7]]))