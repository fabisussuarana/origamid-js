// FETCH API --------------------------------------
// Permite fazermos requisições HTTP através do método fetch(). Este método retorna a resolução de uma 
// Promise. Podemos então utilizar o then para interagirmos com a resposta, que é um objeto do tipo Response.

const doc = fetch('./doc.txt');

doc
.then(resolucao => resolucao.text())
.then((body) => {
    const conteudo = document.querySelector('.conteudo');
    conteudo.innerText = body;
    console.log(body);
});

// RESPONSE --------------------------------------
// O objeto Response, possui um corpo com o conteúdo da resposta. Esse corpo pode ser transformado utilizando 
// métodos do protótipo do objeto Response. Estes retornam outras promises.

