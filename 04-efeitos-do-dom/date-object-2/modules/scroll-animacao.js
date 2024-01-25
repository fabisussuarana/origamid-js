export default function initAnimacaoScroll() {
    const sections = document.querySelectorAll('[data-anime="scroll"');
    // faço essa condição para caso não exista sections, não fazer nada e nem dar erro
    if (sections.length) {
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
                if (isSectionVisible)
                    section.classList.add('ativo');
                else if(section.classList.contains('ativo'))
                    section.classList.remove('ativo');
            })
        }

        // para estar ativado assim que o site abre, já que fiz para que apareça após rolar a página
        animaScroll();

        window.addEventListener('scroll', animaScroll);
    }
}