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

    // fazendo td e dd iniciarem com o primeiro elemento ativo, ou seja, com a informação visível
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion(){
      // ativa e desativa a classe ativo em td e dd
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    })
  }
}

initAccordion();


function initScrollSuave(){
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event){
    event.preventDefault();
    // pegando o valor do atributo href dos links
    const href = event.currentTarget.getAttribute('href');
    // usando esse valor de href para selecionar as sections
    const section = document.querySelector(href);
    
    // scroll
    section.scrollIntoView({
      // scroll fica suave
      behavior: 'smooth',
      // alinha no começo da section
      block: 'start', 
    })
    
    // -------------- Forma alternativa -----------------
    // distancia do topo da página para a section
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   // até onde o scroll vai rola, do topo até esse valor
    //   top: topo,
    //   // scroll suave
    //   behavior: 'smooth',
    // })
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}

initScrollSuave();


function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  // faço essa condição para caso não exista sections, não fazer nada e nem dar erro
  if(sections.length) {
    // para pegar 60% da tela
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      // pegando cada section
      sections.forEach((section) => {
        // o método getBoundingClientRect() tem algumas propriedades e a usada aqui é o top
        // para saber a distância da section para o topo
        const sectionTop = section.getBoundingClientRect().top;
        // essa subtração é feita para que a animação não ocorra apenas quando bater na ponta 
        // da nova section, mas sim, um pouco acima, dessa forma, a animação vai ocorrer quando
        // tiver a distância do elemento para o topo menos 60% da página, acontecendo um pouco antes.
        // Assim, a distância para que a animação ocorra diminui.
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        if(isSectionVisible)
          section.classList.add('ativo');
        else 
          section.classList.remove('ativo');
      })
    }

    // para estar ativado assim que o site abre, já que fiz para que apareça após rolar a página
    animaScroll();

    window.addEventListener('scroll', animaScroll);
  }
}
initAnimacaoScroll();