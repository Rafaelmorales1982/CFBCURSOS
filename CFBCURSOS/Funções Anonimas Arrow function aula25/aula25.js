// Arrow function
const soma = (v1, v2) =>{
return v1 + v2;
}
console.log(soma(10, 5));

//Arrow  function  parâmetro REST...Spread
const media=(...valores)=>{
  let tam = valores.length;
  let totalMedia = 0;
  for(let i=0; i<tam; i++){
    totalMedia += valores[i] / valores.length;
  }
  return totalMedia;
}
console.log(media(6, 6, 5, 5));

//Arrow  function ...Spread com for of
const media2 = (...valores)=> {
  let totalMedia= 0;
  for(j of valores){
    totalMedia += j / valores.length;
  }
  return totalMedia;
}
console.log(media2(7,7,7,7));