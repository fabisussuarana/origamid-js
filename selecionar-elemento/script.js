// GET ELEMENT BY ID

/* Uma forma de selecionar um elemento é usando getElementById, 
onde seleciona o elemento pelo seu id */
const elemento = document.getElementById('elemento');
console.log(elemento.innerText);

// Caso o elemento não exista o valor retornado é null

// -------------------------------------------------------------------------

// GET ELEMENTS BY CLASS NAME E GET ELEMENTS BY TAG NAME

/* Outra forma de selecionar é usando a classe:getElementsByClassName 
   e a tag:getElementsByTagName nesses dois casos é retornado uma lista, 
   mesmo que de um elemento. Ela é automaticamente atualizada.*/

/* É possível selecionar duas ou mais classes, porém, ele só vai selecionar
   os elementos que possuirem as duas classes */

const elemento2 = document.getElementsByClassName('opa');
console.log(elemento2);

const elemento3 = document.getElementsByTagName('p');
console.log(elemento3);

// --------------------------------------------------------------------------

// QUERY SELECTOR E QUERY SELECTOR ALL

/* Seletor geral: querySelector, ele retorna o primeiro elemento que combinar 
com o seu seletor */

// É possível ainda, selecionar elementos que possuem link externo
// Aqui esse ^ significa que vai selecionar os que começarem com #
const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);

/* Outro seletor é o querySelectorAll, ele seleciona todos que batem com os critérios
   da seleção, porém, ele retorna uma lista estática, ou seja, se for adicionado algo
   no código que atenda aquele critério, ele não vai pegar, porque não atualiza a lista */
const lis = document.querySelectorAll('.cumprimento li');
console.log(lis.length);

// --------------------------------------------------------------------------------------

// O nodeList(querySelectorAll) tem mais métodos do que o HtmlColletion(ElementsByTagsName por exemplo)

// Para transformar uma Array Like em Array msm:
const elementos = Array.from(elemento3);


// Exercício relacionado ao html do projeto origamid
// Retorne no console todas as imagens do site
const img = document.querySelectorAll('img');

// Retorne no console apenas as imagens que começam com a palavra imagem
const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]');

// Selecione apenas os links internos (que começam com #)
const link = document.querySelector('[href^="#"]');

// Selecione o primeiro h2 dentro de .animais-descricao
const h2 = document.querySelector('.animais-descricao h2');

// Selecione o último p do site
const p = document.querySelectorAll('p');
const ult = p[p.length - 1]; /* peguei a quantidade de p e diminuí por 1 pq 
as posições começam a contar pelo 0, dessa forma tenho a posição do último p */

// Outra forma: const ult = p[--p.length];
