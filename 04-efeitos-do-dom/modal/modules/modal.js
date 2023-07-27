export default function initModal(){

    const botaoAbrir = document.querySelector('[data-modal="abrir"]');
    const botaoFechar = document.querySelector('[data-modal="fechar"]');
    const containerModal = document.querySelector('[data-modal="container"]');

    if(botaoAbrir && botaoFechar && containerModal){

        function toggleModal(event){
            event.preventDefault();
            containerModal.classList.toggle('ativo');
        }
        
        function cliqueForaModal(event){
            // verifica se clicou fora da telinha branca e fecha
            // target pega exatamente onde clicou, ignorando filhos e pais
            if(event.target === this) toggleModal(event);
        }
        
        botaoAbrir.addEventListener('click', toggleModal);
        botaoFechar.addEventListener('click', toggleModal);
        containerModal.addEventListener('click', cliqueForaModal);
    }
}