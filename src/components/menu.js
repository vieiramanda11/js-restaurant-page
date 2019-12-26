const Menu = (() => {

  const renderMenu = () => {
    const content = document.getElementById('content');
    const menu = document.createElement('div');
  
    menu.innerHTML = `<h2>Testing Menu!</h2>`;
    menu.classList.add('menu');
    content.appendChild(menu);
    console.log('testing menu');
  }
  
  const showMenu = () => {
    const menuClass = document.querySelector('.menu');
    menuClass.style.display = 'block';
  }
  
  const removeMenu = () => {
    const menuClass = document.querySelector('.menu');
    menuClass.style.display = 'none';
  }

  return {
    renderMenu,
    showMenu,
    removeMenu
  }
})();

export default Menu;