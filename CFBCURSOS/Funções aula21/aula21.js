//utilizando return na função
console.log("----------Função com return com String-----------");
function canal(){
    return "Rafael Morales";
}
console.log(canal());

//---------Função multiplicar números com return-------------
console.log("----------Função com return calculando 2 * 10----------");
function calculando(){
    let n1 = 2;
    let n2 = 10;
    let res = n1 * n2;
    return res;
}

let total = calculando();
console.log(total);

console.log("----------Função com return com número par e ímpar---------");

function imparPar(){
    let n1 = 3;
    let n2 = 3;
    let resultado = n1 * n2;
    if(resultado %2 === 0){
        return "Par";
    }else {
        return "Ímpar";
    }
}
let res = imparPar();
console.log(res);