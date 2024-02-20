// .BLOB() - é um objeto utilizado para representar dados de um arquivo. 
// Por ex.: transformar requisições de imagens, ele gera um url único.

const imagem = fetch('./imagem.png');

imagem.then(r => r.blob())
.then(body => {
    const blobUrl = URL.createObjectURL(body);
    const imagemDom = document.querySelector('img');
    imagemDom.src = blobUrl;
});

// .CLONE() - Ao utilizarmos os métodos acima, text, json e blob, a resposta é modificada, e não épossível
// fazer mais de uma modificação na resposta inicial, por isso existe o método clone, caso você necessite 
// transformar uma resposta em diferentes valores.

fetch('https://viacep.com.br/ws/01001000/json/')
.then(response => {
  const cloneResponse = response.clone();
  response.json().then(json => {
    console.log(json)
  });
  cloneResponse.text().then(text => {
    console.log(text)
  });
});

// .HEADERS() - É uma propriedade que possui os cabeçalhos da requisição. É um tipo de dado iterável então 
// podemos utilizar o forEach para vermos cada um deles.

fetch('https://viacep.com.br/ws/01001000/json/')
.then(response => {
  response.headers.forEach(console.log);
});

// .STATUS e .OK - Retorna o status da requisição. Se foi 404, 200, 202 e mais. ok retorna um valor booleano 
// sendo true para uma requisição de sucesso e false para uma sem sucesso.

fetch('https://viacep.com.br/ws/01001000/json/')
.then(response => {
    // se o type for BASIC significa que estou fazendo uma requisição dentro do meu próprio servidor.
    // se o type for CORS significa que foi uma requisição de fora, de outro servidor, mas que ela é permitida.
  console.log(response.status, response.ok, response.type);
  if(response.status === 404) {
    console.log('Página não encontrada')
  }
});