let fonte = 18;


//difinindo a função que muda o tamanho do texto
function tamTexto(contador){
    if(contador == 18){
        fonte = contador;
    }else{
        fonte += contador;
    }

    //Limitando o tamanho
    if(fonte >= 60){
        fonte = 60;
    }else if(fonte < 10){
        fonte = 10;
    }




    //Definindo o tamanho da fonte no conteudo
    document.querySelector("body").style.fontSize = fonte + "px";




}

