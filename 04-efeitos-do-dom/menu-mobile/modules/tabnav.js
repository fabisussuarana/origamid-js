export default function initTabNav() {
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabContent = document.querySelectorAll('[data-tab="content"] section');

    if (tabMenu.length && tabContent.length) {
        const activeClass = 'ativo';

        tabContent[0].classList.add(activeClass);

        function activeTab(index) {
            tabContent.forEach((section) => {
                // remove o ativo de todas as sections
                section.classList.remove(activeClass);
            });
            // com base no index passado na outra função, é adicionada a clase ativo no item desse index
            // além do data-anime
            const direcao = tabContent[index].dataset.anime;
            tabContent[index].classList.add(activeClass, direcao);
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