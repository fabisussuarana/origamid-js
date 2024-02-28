// ASYNC AWAIT (await só espera promise pra ter o resultado dela,
//  não espera algo aleatório terminar)
// A palavra chave async indica que a função possui partes assíncronas e que você pretende esperar a resolução 
// da mesma antes de continuar. O await irá indicar a promise que devemos esperar. Faz parte do ES8.

// sem os awaits ali daria errado porque o resto do código iria tentar usar as variáveis das promises vazias
async function puxarDados() {
    const dadosResponse = await fetch('./dados.json');
    const dadosJSON = await dadosResponse.json();
    console.log(dadosJSON);
    document.body.innerText = dadosJSON.faculdade;
  }

puxarDados();

// A diferença entre then e async é a sintaxe. A do async é mais limpa.

// TRY / CATCH
// Para lidarmos com erros nas promises, podemos utilizar o try e o catch na função.

async function puxarDados() {
  try {
    const dadosResponse = await fetch('./dados.json');
    const dadosJSON = await dadosResponse.json();
    document.body.innerText = dadosJSON.id;
  }
  catch(erro) {
    console.log(erro);
  }
}

puxarDados();

// INICIAR FETCH AO MESMO TEMPO
// Não precisamos esperar um fetch para começarmos outro. Porém precisamos esperar a 
// resposta resolvida do fetch para transformarmos a response em json.

async function iniciarAsync() {
  const dadosResponse = fetch('./dados.json');
  const clientesResponse = fetch('./clientes.json');

  // ele espera o que está dentro da expressão () ocorrer primeiro
  // sem o (await dadosResponse) o que vem em dadosResponse é a promise,
  // e não a resposta, e o .json() só se aplica a ela.
  const dadosJSON = await (await dadosResponse).json();
  const clientesJSON = await (await clientesResponse).json();

  console.log(dadosJSON);
  console.log(clientesJSON);
}

iniciarAsync();
