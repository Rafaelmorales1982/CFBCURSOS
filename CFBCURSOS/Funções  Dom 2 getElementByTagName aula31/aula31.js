//pegando os elementos do DOM com getElementByTagName e converte para array
//utilizando spread [...]

const colecaoHtml = [...document.getElementsByTagName("div")];
console.log(colecaoHtml);
colecaoHtml.map((e)=>{

    console.log(e);

    if( e === c1 ){
        console.log(e.innerHTML = "Cursos Alura1");
    }else if(e === c2){
        console.log(e.innerHTML = "Cursos HTML2");
    }else if(e === c3){
        console.log(e.innerHTML = "Cursos HTML3");
    }else if(e === c4){
        console.log(e.innerHTML = "Cursos HTML4");
    }else if(e === c5){
        console.log(e.innerHTML = "Cursos HTML5");
    }else if(e === c6){
        console.log(e.innerHTML = "Cursos HTML6");
    }

});