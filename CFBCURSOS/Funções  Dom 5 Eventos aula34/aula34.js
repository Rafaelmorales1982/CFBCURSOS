//Manipulando Dom com Eventos
/*
const c1 = document.querySelector("#c1");
//pegar todos cursos

//criando uma arrow faction de aparecer mensagem através do clique
const msg = () => {
  alert("Clicou"); // aparece uma caixa de dialogo na página
};

// adicionar escutador de eventos addEcentListener
//assim também posso por uma função dentro
c1.addEventListener("click", (evt) => {
  const elemento = evt.target;
  elemento.classList.add("destaque");
});
*/
//pegando todos class .curso da página
const cursos = [...document.querySelectorAll(".curso")];
//percorrer todos elementos .curso com MAP
cursos.map((el) => {
  el.addEventListener("click", (evt) => {
    const el = evt.target;
    el.classList.add("destaque");

    //mostrar id no console
    console.log("O id -> "+el.id+" foi clicado....");
    //mostra o contéudo que esta dentro do botão quando for clicado
    console.log(el.innerHTML +" foi clicado...")
  });
});
