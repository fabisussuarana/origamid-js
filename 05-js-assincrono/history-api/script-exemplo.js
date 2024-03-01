const links = document.querySelectorAll('a');

// 1 - previno o evento padrão do link de mudar de página
// 2 - mando como parâmetro para a função fetchPage a url do link onde cliquei
function handleClick(event){
    event.preventDefault();
    fetchPage(event.target.href);
    // muda o url da página lá em cima, para o url do link clicado
    window.history.pushState(null, null, event.target.href);
}

// 3 - await espera a resposta do fetch
// 4 - await espera a resposta passar para texto
// 5 - mando essa resposta de texto como parâmetro para a função replaceContent
async function fetchPage(url){
    // em páginas maiores, é interessante colocar algo de carregando aqui
    // antes do await carregar
    const pageResponde = await fetch(url);
    const pageText = await pageResponde.text();
    replaceContent(pageText);
}

// 6 - crio uma div e armazeno em newHtml
// 7 - faço a resposta de texto da url(pageText/newText) ir para dentro da div(newHtml) usando innerHtml
// 8 - passo para a constante oldContent a div do documento atual.
// 9 - passo para a constante newContent a div do documento que veio da url
// 10 - passo para oldContent(doc atual) o conteúdo da outra página que veio através da url
// 11 - passo para o titulo do doc atual o valor de titulo de newHtml
function replaceContent(newText){
    const newHtml = document.createElement('div');
    newHtml.innerHTML = newText;

    const oldContent = document.querySelector('.content');
    const newContent = newHtml.querySelector('.content');

    oldContent.innerHTML = newContent.innerHTML;
    document.title = newHtml.querySelector('title').innerText;
}

window.addEventListener('popstate', () => {
    console.log(window.location)
    // fetchPage()
})

// 12 - quando clicar em um dos link ativa a função handleClick    
links.forEach(link => {
    link.addEventListener('click', handleClick);
});