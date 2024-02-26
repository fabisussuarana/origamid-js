// API
// Um servidor, aplicativo, objeto JavaScript ou qualquer outra coisa que você interaja através de comandos. Ao digitar uma URL, 
// estamos utilizando a API do browser para se comunicar com a API do servidor.

// Interface
// A interface são os comandos criados para permitir a interação com a aplicação. Ex: 'VIOLAO'.toLowerCase() é um método que faz 
// parte da interface do objeto String. A interação com a interface retorna um efeito / resposta.

// Ex. de api:
// https://api.github.com/users/origamid
// https://api.github.com/users/origamid/followers

// A gente interage com a api através da url, fazendo uma requisição e obtém uma response(resposta) ou um efeito (ex.: apagar algo)

// HTTP - Hypertext Transfer Protocol é o protocolo utilizado para enviarmos/recebermos arquivos e dados na web.

fetch('https://pokeapi.co/api/v2/pokemon/')
.then(r => r.json())
.then(pokemon => {
    console.log(pokemon.results[2])
})

// URL e METHOD
// Uma requisição HTTP é feita através de uma URL. O método padrão é o GET, mas existem outros como POST, UPDATE, DELETE, HEADER.

const url = 'https://jsonplaceholder.typicode.com/posts/';
const options = {
    method: 'POST',
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
    body: '"aula":"JavaScript"',
}
// dando erro não sei por quê.
// fetch(url, options)
// .then(response => response.json())
// .then(json => {
//     console.log(json);
// })

// ----------------------------------------------------------------------------------

// METHOD
// Get - Puxa informação, utilizado para pegar posts, usuários e etc.
// é o padrão então não precisa especificar. 
const url2 = 'https://jsonplaceholder.typicode.com/posts/';
fetch(url, {
  method: 'GET'
})
.then(r => r.json())
.then(r => console.log(r))

// Post - Utilizado para criar posts, usuários e etc.
// Put - Geralmente utilizado para atualizar informaões.
// Delete - Delete uma informação.

// Head - Puxa apenas os headers. É uma requisição mais leve porque não puxa o body.
const url3 = 'https://jsonplaceholder.typicode.com/posts/1/';

fetch(url, {
  method: 'HEAD',
})
.then(response => {
  response.headers.forEach(console.log);
  console.log(response.headers.get('Content-Type'));
});

