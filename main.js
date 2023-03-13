
const display = document.querySelector("#display"); // o Queryselector retorna o primeiro elemento dentro do documento.

const buttons = document.querySelectorAll("button");  // Retorna uma lista de elementos dentro do documento para a constante trabalhar com todos os botoes usa o selector All.


buttons.forEach((btn) => {
    btn.addEventListener ("click", () =>{ //forEach quer dizer PARA CADA. //pegando cada botão e o addEventListener- aciona o evento em cada clique.
       if(btn.id === "=") { 
          display.value = eval(display.value); //a função do eval é forçar o java ler como valores e não colocar o símbolo do igual(=).
       } else if (btn.id === "ac") {
          display.value = ""; //quando a pessoa apertar o ac vai limpar.
       } else if (btn.id === "de") {
          display.value = display.value.slice (0, -1); //o n° 1 é pra apagar um caractere só da direita p/ esquerda.
       } else{
          display.value += btn.id
       }
    }) 
}) 





//=== (Valor e Tipo igual) - é usado para a comparação entre duas variáveis, mas isso irá verificar o tipo estrito, o que significa que ele irá verificar o tipo de dados e comparar dois valores  LINHA 10. 

//O método slice() percorre a string ou o array para selecionar a faixa de valores determinada por parâmetro. A primeira posição de uma string ou array é a posição de número 0  LINHA 14.

//O operador de atribuição encurtado += pode ser utilizado para concatenar strings  LINHA 16.