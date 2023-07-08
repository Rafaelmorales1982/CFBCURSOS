//funções geradoras
function* cores(){
  yield 'Vermelho';
  yield 'Verde';
  yield 'Azul';

} 
let itc =cores();
console.log(itc.next().value);
console.log(itc.next().value);
console.log(itc.next().value);

//----------------------
//-------funções geradoras com perguntas
function* perguntas(){
  const nome=yield 'Qual seu nome?';
  const esporte=yield 'Qual seu esporte favorito?';
  return "Seu nome é : "+ nome + ", Seu esporte favorito é : " +esporte;
}

const itp = perguntas();
console.log(itp.next().value);
console.log(itp.next('Rafael').value);
console.log(itp.next('Futebol').value);