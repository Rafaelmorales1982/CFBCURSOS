//adicionando id da página para variável caixa1
const caixa1 = document.querySelector("#caixa1");
//adicionando id da página para variável caixa2
const caixa2 = document.querySelector("#caixa2");
//adicionando id da página para variável btn
const btn_transferir = document.querySelector("#btn_transferir");
//pegando todos os elementos class .curso
//urilizando spread para modificar array
const todosCursos = [...document.querySelectorAll(".curso")];

todosCursos.map((elemento) => {
  //escutando o elemento com addEventListener click
  elemento.addEventListener("click", (evt) => {
    const curso = evt.target; //pegando o elemento que foi clicado
    // console.log(curso); //para verificar se esta clicando no elemento correto

    //para cada curso quando for selecionando chamar classlist
    //toggle serve para verificar a classe selecionado se tiver remove se não tem ele adiciona
    //classList serve para acessar os elementos que estão na classe do html
    curso.classList.toggle("selecionado"); //selecionando uma classe do html e css
  });
});

//ao clicar no btn (copiar) vai pegar a classe selecionado e vai adicionar no container caixa 2
btn_transferir.addEventListener("click", () => {
  const cursosSelecionado = [...document.querySelectorAll(".selecionado")];
  const cursosNaoSelecionando = [...document.querySelectorAll(".curso:not(.selecionado)")];
  //verifcar se foi selecionado corretamente
  // console.log(cursosSelecionado);
  //percorrer todos elementos com map
  cursosSelecionado.map((elementos) => {
    //appendChild (anexa) adiciona um filho para container caixa2
    //tudo que for selecionado vai ser anexado para caixa2
    caixa2.appendChild(elementos);
  });

  //percorrer a os elemento que não estão selecionando no container caixa2
  cursosNaoSelecionando.map((elementos) => {
    caixa1.appendChild(elementos);
  });
});
