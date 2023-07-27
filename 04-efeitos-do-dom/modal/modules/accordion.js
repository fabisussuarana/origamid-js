export default function initAccordion() {
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
    if (accordionList.length) {
        const activeClass = 'ativo';

        // fazendo td e dd iniciarem com o primeiro elemento ativo, ou seja, com a informação visível
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);

        function activeAccordion() {
            // ativa e desativa a classe ativo em td e dd
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        })
    }
}