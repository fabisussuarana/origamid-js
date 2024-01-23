export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  // se no li não tiver o atributo outside entra aqui
  if(!element.hasAttribute(outside)) {
    events.forEach(userEvent => {
      html.addEventListener(userEvent, handleOutsideClick);
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
