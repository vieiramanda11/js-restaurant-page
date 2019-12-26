import Image from '../images/background.jpg'

const MainPage = (() => {
  const renderNavbar = () => {
    const content = document.getElementById('content');
    const navbar = document.createElement('nav');
    
    navbar.innerHTML = `
    <div class="nav-wrapper navigation navigation container">
      <a id ="init" href="#" class="brand-logo">Restaurant</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a id="about" href="#">About</a></li>
        <li><a id="menu" href="#">Menu</a></li>
        <li><a id="contact" href="#">Contact</a></li>
      </ul>
    </div>`;
  
    content.appendChild(navbar);
  }

  const renderMainPage = () => {
    const content = document.getElementById('content');
    const text = document.createElement('div');
    text.innerHTML = `<h1>WELCOME TO THE RESTAURANT</h1>`
    const mainImage = document.createElement('img');
    mainImage.classList.add('main-img');
    content.classList.add('center-align');
    content.classList.add('center-align');
    mainImage.src = Image;
    content.appendChild(text);
    content.appendChild(mainImage);
  }

  const showMainPage = () => {
    const imageClass = document.querySelector('.main-img');
    const textClass = document.querySelector('h1');
    imageClass.style.display = 'block';
    textClass.style.display = 'block';
  }

  const removeMainPage = () => {
    const imageClass = document.querySelector('.main-img');
    const textClass = document.querySelector('h1');
    imageClass.style.display = 'none';
    textClass.style.display = 'none';
  }

  return {
    renderNavbar,
    renderMainPage,
    showMainPage,
    removeMainPage
  }
})();

export default MainPage;