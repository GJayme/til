let comparaComThis = function (param) {
  console.log(this === param);
}

comparaComThis(global);

const obj = {}
comparaComThis = comparaComThis.bind(obj);
comparaComThis(global);
comparaComThis(obj);

let comparaComThisArrow = param => console.log(this === param);

comparaComThisArrow(global); //this dentro de arrow é associado no contexto em que a funcao foi escrita
comparaComThisArrow(module.exports);

comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj);
comparaComThisArrow(module.exports);