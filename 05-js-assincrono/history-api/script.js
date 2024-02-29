// HISTORY
// É possível acessarmos o histórico de acesso do browser em uma sessão específica através do window.history. 
// O objeto history possui diferentes métodos e propriedades.

window.history;
window.history.back(); // vai para a anterior
window.history.forward(); // vai para a próxima

// console.log(window.history);

// PUSHSTATE()
// A parte interessante de manipularmos o history é que podemos modificar o histórico e adicionar um novo item. 
// window.history.pushState(obj, title, url).

// Em obj podemos enviar um objeto com dados mas o seu uso é restrito por isso geralmente utilizamos null. 
// O title ainda é ignorado por alguns browsers, também utilizamos null nele. 
// O url que é parte importante.

// toda vez que dá refresh alterna a página
window.history.pushState(null, null, 'sobre.html');

// POPSTATE
// O evento popstate pode ser adicionado ao objeto window. Assim podemos executar uma função toda vez que o usuário 
// clicar no botão de voltar ou próximo.
// popstate só vai funcionar se modificar na "mão" o push state
window.addEventListener('popstate', () => {
    console.log('Teste');
    fetchPage(window.location.pathname);
});

// FETCH E HISTORY
// Ao puxarmos dados via fetch api, o url da página continua o mesmo. Ao combinar fetch com a history api conseguimos 
// simular uma navegação real entre páginas, sem a necessidade de recarregamento da mesma.
async function fetchPage(url) {
    const pageReponse = await fetch(url);
    const pageText = await pageReponse.text();
    console.log(pageText)
    window.history.pushState(null, null, url);
}  

