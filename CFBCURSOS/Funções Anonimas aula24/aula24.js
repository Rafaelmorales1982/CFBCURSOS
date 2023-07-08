//Criando função Anônimas

let resultado = function(v1, v2){
  return v1 + v2;
}

console.log(resultado(10, 5));

//Criando função Anônimas média com Spread

let resultado2 = function(...valores){
  let res2 = 0;
  for ( i of valores  ){// for mais curto
    res2 += i / valores.length;// média
  }
  return res2;
}

console.log(resultado2(10, 10, 10, 10));

//Criando função Anônimas média com Spread for padrão

let resultado3 = function(...valores){
  let tam = valores.length;
  let res3 = 0;
  for (let j = 0; j < tam; j++ ){// for mais curto
    res3 += valores[j] / valores.length; // média
  }
  return res3;
}

console.log(resultado3(10, 10, 10, 10));