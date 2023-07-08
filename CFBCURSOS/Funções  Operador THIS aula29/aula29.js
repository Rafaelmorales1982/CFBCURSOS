function aluno(nome, nota) {
  this.nome = nome;
  this.nota = nota;

  //Utilizando Arrow function
  //para usar setTimeout colocando
  //tempo para iniciar o programa
  this.dados_Alunos = function () {
    setTimeout(()=>{
        console.log(nome);
        console.log(nota);
    }, 3000);
   
  };
}

aluno("Rafael", 100);
dados_Alunos();
