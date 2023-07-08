//Manipulando o DOM com getElementByClassName
//utilizando operador spread [...] para transformar em array
const cursosTodos = [...document.getElementsByClassName("curso")];
const cursosC1 = [...document.getElementsByClassName("c1")];
const cursosC2 = [...document.getElementsByClassName("c2")];

console.log(cursosTodos);
console.log(cursosC1);
console.log(cursosC2);

//percorrer todos os elementos utilizando o MAP
cursosTodos.map((elementos) => {
  elementos.classList.add("destaque"); // quando adiciona muda as propriedades da outras classes !important dentro do style
});
