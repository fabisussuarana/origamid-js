function initTabNav(){  
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if(tabMenu.length && tabContent.length) {
    const activeClass = 'ativo';

    tabContent[0].classList.add(activeClass);

    function activeTab(index) {
      tabContent.forEach((section) => {
        // remove o ativo de todas as sections
        section.classList.remove(activeClass);
      });
      // com base no index passado na outra função, é adicionada a clase ativo no item desse index
      tabContent[index].classList.add(activeClass);
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

function initAccordion(){
  const accordionList = document.querySelectorAll('.js-accordion dt');
  if(accordionList.length){
    const activeClass = 'ativo';

    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion(){
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    })
  }
}

initAccordion();
