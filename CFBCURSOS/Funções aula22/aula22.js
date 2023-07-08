//Função com parâmetros
function soma(p1) {
  return p1;
}
console.log(soma(2023));
console.log(soma("Rafael"));

//Função com 2 parâmetros
function soma2(p1 = 0, p2 = 0) {
  return p1 + p2;
}
console.log(soma2(20, 21));

//Função com 2 parâmetros
function media(p1 = 0, p2 = 0, p3 = 0, p4 = 0) {
  let res = (p1 + p2 + p3 + p4) / 4;
  return res;
}

let totalMedia = media(5, 5, 6, 6);
console.log(totalMedia);

//função valor
const valorPadrao = 0;
function adiciona(v = valorPadrao) {
  return valor + v;
}
let valor = 0;
console.log(valor);

valor = adiciona(10);
console.log(valor);
