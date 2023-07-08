//Manipulando o DOM com getElementByClassName
//utilizando operador spread [...] para transformar em array
const divTodos = [...document.getElementsByClassName("div")];
const cursosTodos = [...document.getElementsByClassName("curso")];
const cursosC1 = [...document.getElementsByClassName("c1")];
const cursosC2 = [...document.getElementsByClassName("c2")];

//pegar todas as divs com querySelectorAll
//mas com  querySelector ele retorna apenas uma div ou seja a primeira
// trnsformar em array com spread [...]
const query_todasDivs = [...document.querySelectorAll("div")];
const query_cursosTodos = [...document.querySelectorAll(".curso")];
const query_cursosC1 = [...document.querySelectorAll(".c1")];
const query_cursosC2 = [...document.querySelectorAll(".c2")];

//retornar apenas um elemento
const query_cursoEspecial = document.querySelectorAll("#c1")[0];
console.log(query_cursoEspecial);

console.log(query_cursosC1);
console.log(query_cursosC2);

console.log(query_cursosTodos);
console.log(query_todasDivs);

/*
console.log(divTodos);
console.log(cursosTodos);
console.log(cursosC1);
console.log(cursosC2);

//percorrer todos os elementos utilizando o MAP
cursosTodos.map((elementos) => {
  elementos.classList.add("destaque"); // quando adiciona muda as propriedades da outras classes !important dentro do style
});
*/
