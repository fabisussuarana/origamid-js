// ASYNC AWAIT
// A palavra chave async indica que a função possui partes assíncronas e que você pretende esperar a resolução 
// da mesma antes de continuar. O await irá indicar a promise que devemos esperar. Faz parte do ES8.

// sem os awaits ali daria errado porque o resto do código iria tentar usar as variáveis das promises vazias
async function puxarDados() {
    const dadosResponse = await fetch('./dados.json');
    const dadosJSON = await dadosResponse.json();
    console.log(dadosJSON);
    document.body.innerText = dadosJSON.titulo;
  }
  
  puxarDados();
  