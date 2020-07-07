const valor = 'Global';

function minhaFuncao() { // A funcao carrega alem dos parametros o contexto lexico onde ela foi defininada
  console.log(valor);
}

function exec() {
  const valor = 'Local'
  minhaFuncao()
}

exec()