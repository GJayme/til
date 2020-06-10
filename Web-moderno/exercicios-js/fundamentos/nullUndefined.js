let valor; //Não inicializada
console.log(valor); //Quando você chama uma variavel n incializada ele da undefined

valor = null; //Ausência de valor -> zera um valor de uma variável
console.log(valor);
// console.log(valor.toString()); // Erro!

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.5;
console.log(produto);

produto.preco = undefined; //EVITE ATRIBUIR DE FORMA EXPLICITA O UNDEFINED
console.log(!!produto.preco);
// delete produto.preco;
console.log(produto);

produto.preco = null; //Produto sem preço
console.log(!!produto.preco);
console.log(produto);
