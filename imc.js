const calcular = document.getElementById('calcular');
function imc(){
    const altura = document.getElementById('altura').value;/*cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura.*/
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(altura !=='' && peso !==''){ 
     const valorIMC = (peso / (altura * altura)).toFixed(1);


    let classificacao ='';/*permite que você declare variáveis limitando seu escopo no bloco, instrução, ou em uma expressão na qual ela é usada.*/
    if (valorIMC <18.5){
         classificacao ='Abaixo do peso';
    }else if (valorIMC <25){ /*executa a afirmação, dentro do bloco, se determinada condição for verdadeira.*/
         classificacao ='Peso ideal';
    }else if (valorIMC <30){
         classificacao ='Sobrepeso';
    }else if (valorIMC <40){
         classificacao ='Obsidade';
    }else{ /*serve basicamente para suprir a parte negativa da condição do IF,*/
         classificacao ='Obsidade Grave, Cuidado!!';
    }

    resultado.textContent = `Seu IMC é ${valorIMC} e sua classificacao é: ${ classificacao}.`;




   /* SE Altura for diferente de em branco e peso 
   for diferente de em branco faça
   !== diferente
   == igual
   >maior
   <menor

   */

    }
    else{
        resultado.textContent = `Preencha todos os campos!!`;/*textContent serve para obtermos o valor de no TEXT_NODE . Text_node são aqueles que possuem apenas texto*/
    }

}
calcular.addEventListener('click', imc)/*é a maneira de registrar uma espera de evento como especificada no W3C DOM.*/