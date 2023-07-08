function nome(){//declaração da função
    console.log("CFB Cursos");
}

nome();//chamada da funções

//criando loop for com 10 vezes

for (let i = 0; i < 10; i++) {
    
    nome(); console.log([i]);
}

function soma2_10() {
    let n1 = 2;
    let n2 = 10;
    let soma = n1 + n2;
    console.log(soma);
}

//executando a função 10x com for

for (let i = 0; i < 10; i++){
    soma2_10();
}

//função mudar  tags da páginaindex.html
function mudarTexto(){
    let d1 = document.getElementById("d1");
    let d2 = document.getElementById("d2");
    let d3 = document.getElementById("d3");
    //escrevendo ou seja editando os textos da página
    d1.innerHTML="CFB Cursos Rafael Morales";
    d2.innerHTML="CFB Cursos Rafael Morales";
    d3.innerHTML="CFB Cursos Rafael Morales";
}
    
//mudarTexto();