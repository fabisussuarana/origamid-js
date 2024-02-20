// FETCH API --------------------------------------
// Permite fazermos requisições HTTP através do método fetch(). Este método retorna a resolução de uma 
// Promise. Podemos então utilizar o then para interagirmos com a resposta, que é um objeto do tipo Response.

const doc = fetch('./doc.txt');

// .TEXT() ----------------------------------------
// Com o método .text() é possível pegar o corpo de qualquer arquivo, seja html, css, text, json...

// primeiro then pega o texto do arquivo, usando o método text() e retorna outra promessa
// segundo then seleciona a div e passa o texto do arquivo(que é o parâmetro body, ou seja, o texto da resposta da promise) para a div
doc
.then(resolucao => resolucao.text())
.then((body) => {
    const conteudo = document.querySelector('.conteudo');
    conteudo.innerText = body;
    console.log(body);
});

// Exemplo 2
const docStyle = fetch('./style.css');

docStyle.then(r => r.text())
.then(body => {
    const conteudo = document.querySelector('.conteudoStyle');
    const style = document.createElement('style');
    // conteúdo do body, ou seja, do documento css, vai para dentro da tag style criada
    style.innerHTML = body;
    // inserindo o style com o conteúdo dentro do corpo html, assim a estilização é aplicada
    conteudo.appendChild(style);
})


// RESPONSE --------------------------------------
// O objeto Response, possui um corpo com o conteúdo da resposta. Esse corpo pode ser transformado utilizando 
// métodos do protótipo do objeto Response. Estes retornam outras promises.

const cepJson = fetch('https://viacep.com.br/ws/01001000/json/');

// no primeiro then uso o método json em vez do text, assim ele me retorna um objeto pra consegui acessar e manipular 
// cada info, e não em formato de texto
cepJson
.then(r => r.json())
.then((body) => {
    console.log(body.localidade);
    const conteudoJson = document.querySelector('.conteudoJson');
    conteudoJson.innerText = body.localidade;
});

// Transformando texto em html
const sobre = fetch('./sobre.html');

const div = document.createElement('div');

sobre.then(r => r.text())
.then(body => {
    div.innerHTML = body;
    const titulo = div.querySelector('h1');
    console.log(titulo);

    document.querySelector('h1').innerText = titulo.innerText;
});