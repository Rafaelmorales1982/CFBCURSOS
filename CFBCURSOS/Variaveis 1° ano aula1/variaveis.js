let nota1 = parseFloat(prompt("Digite nota1"));
let nota2 = parseFloat(prompt("Digite nota2"));
let nota3 = parseFloat(prompt("Digite nota3"));
let media;

media = (nota1 + nota2 + nota3) / 3;
console.log(`A média é: ${media}`);
const mostrar = document.getElementById("resultado");
mostrar.innerHTML = 'A média é: '+media;