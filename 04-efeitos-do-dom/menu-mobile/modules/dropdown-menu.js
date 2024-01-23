import outsideClick from './outsideclick.js';

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');
  dropdownMenus.forEach(menu => {
    // foreach aplicado na array
    // userEvent é cada elemento da array ['touchstart', 'click']
    ['touchstart', 'click'].forEach(userEvent => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(event) {
    // previne o padrão, ou seja, que redirecione para outra página
    event.preventDefault();
    this.classList.add('active');
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active');
    });
  };
}