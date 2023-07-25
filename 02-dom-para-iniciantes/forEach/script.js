/* O primeiro parâmetro é o callback, ou seja, a função que será ativada/aplicada a
   cada item. Essa função pode receber três parâmetros: 
        - valorAtual(item atual), 
        - index(que é a sequência númerica daqueles itens) e 
        - array(o array completo, caso queira imprimir) */

const imgs = document.querySelectorAll('img');

// imgs.forEach(function(item, index, array){
//     console.log(item, index, array);
// });

/* Transformar HTMLCollection em array:

    const titulos = document.getElementByClassName('titulo');
    const minhaArray = Array.from(titulos);   */ 

// Se não for array, não é possível percorrer usando o forEach

// ---------------------------------------------------------------------------------

// ARROW FUNCTION
/* Sintaxe curta em relação a function expression. Basta remover 
   a palavra chave function e adicionar fat arrow => após os argumentos */

imgs.forEach((item, index) => {
    console.log(item, index);
})

// forma mais curta e abreviada podendo ser usada se houver apenas uma linha
imgs.forEach(item => console.log(item));

// EXERCÍCIO
// Mostrar cada parágrafo do site
const paragrafos = document.querySelectorAll('p');

paragrafos.forEach(item => console.log(item));

// Mostrar o texto desses parágrafos
paragrafos.forEach(item => console.log(item.innerHTML));