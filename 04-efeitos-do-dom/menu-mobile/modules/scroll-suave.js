export default function initScrollSuave() {
    const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

    function scrollToSection(event) {
        // Evita que ocorra o scroll padrão, sem o efeito suave
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