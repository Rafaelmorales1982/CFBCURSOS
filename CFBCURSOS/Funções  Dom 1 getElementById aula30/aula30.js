// Pegando os elementos Dom (divs)
//const dc1 = document.getElementById("c1");
//console.log(dc1);
//console.log(dc1.id);//mostra o elemento id
//console.log(dc1.innerHTML);//mostra o conteúdo deste elemento
//alterando conteúdo do elemento
//dc1.innerHTML = "CFB Cursos";

//Pegando elementos do DOM e utilizar Array

const dc1 = document.getElementById("c1");
const dc2 = document.getElementById("c2");
const dc3 = document.getElementById("c3");
const dc4 = document.getElementById("c4");
const dc5 = document.getElementById("c5");
const dc6 = document.getElementById("c6");

const arrayElementos = [dc1, dc2, dc3, dc4, dc5, dc6];
console.log(arrayElementos);

arrayElementos.map((e)=>{
console.log(e);
if( e === dc1 ){
    console.log(e.innerHTML = "Cursos Alura1");
}else if(e === dc2){
    console.log(e.innerHTML = "Cursos HTML2");
}else if(e === dc3){
    console.log(e.innerHTML = "Cursos HTML3");
}else if(e === dc4){
    console.log(e.innerHTML = "Cursos HTML4");
}else if(e === dc5){
    console.log(e.innerHTML = "Cursos HTML5");
}else if(e === dc6){
    console.log(e.innerHTML = "Cursos HTML6");
}
})