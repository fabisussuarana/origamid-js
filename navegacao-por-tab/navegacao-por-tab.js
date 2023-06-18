function initTabNav(){  
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    function activeTab(index) {
      tabContent.forEach((section) => {
        // remove o ativo de todas as sections
        section.classList.remove('ativo');
      });
      // com base no index passado na outra função, é adicionada a clase ativo no item desse index
      tabContent[index].classList.add('ativo');
    }

    // Pega cada item(imagem) e o index dele. Ao clicar sobre algum, é feito a
    // chamada da função activeTab e passado como argumento nela o index do item clicado 
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}

initTabNav();