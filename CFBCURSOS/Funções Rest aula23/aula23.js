//Função com parâmetros
function soma (num1, num2){
  return num1 + num2;
}
console.log(soma(50, 50));


//Função REST passa parâmetros qualquer quantidades de valores

function somando (...valores){//... como vc um array posso passar qualquer quantidade
 let tam = valores.length;
 let res = 0;
 for(let i=0; i < tam; i++){
 res += valores[i] / valores.length;// cálculo da média
 // valores[i] contém os valores somados e valores.legth tem a quantidade de números
 } 
 return res; //verifica a quantidade dentro do array

}
console.log(somando(6, 6, 5, 5));




//Função REST passa parâmetros qualquer quantidades de valores

function somando2 (...valores){//... como vc um array posso passar qualquer quantidade
  //... chamdo de Spread parâmetro REST
  let res = 0;
  //utilizando for of
  for(let j of valores){
  res += j / valores.length// cálculo da média
  // valores[i] contém os valores somados e valores.legth tem a quantidade de números
  } 
  return res; //verifica a quantidade dentro do array
 
 }
 console.log(somando(7, 7, 7, 7));