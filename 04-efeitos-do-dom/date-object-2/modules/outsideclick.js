export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  // se no element que é passado quando chama a função outsideClick em outro arquivo não tiver o atributo outside entra aqui
  if(!element.hasAttribute(outside)) {
    events.forEach(userEvent => {
      // setTimeout atrasa o evento que chama a função handleOutsideClick(que tem a callback que no arquivo do MenuMobile.js remove o 
      // active, ou seja, fecha o menu), para que ele possa ser aberto primeiro e só então, o evento de fechar através do clique funcione.
      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));
    })
    element.setAttribute(outside, '');
  }
  function handleOutsideClick(event) {
    // Verifico se onde eu cliquei exatamente não está contido dentro de element(li)
    if(!element.contains(event.target)) {
      // Removendo o atributo outside e os eventos de click,
      // pra não ficar cheio de eventos sem necessidade no Chrome DevTools
      element.removeAttribute(outside);
      events.forEach(userEvent => {
        html.removeEventListener(userEvent, handleOutsideClick);
      })
      callback();
    }
  }
}
