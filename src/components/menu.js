import Image1 from '../images/lasagna.jpg';
import Image2 from '../images/pasta.jpg';
import Image3 from '../images/pizza.jpg';

const Menu = (() => {

  const renderMenu = () => {
    const content = document.getElementById('content');
    const menu = document.createElement('div');
  
    menu.innerHTML = `<h1>Menu</h1>
      <div class="row">
        <div class="col s12 m4">
          <div class="card small">
            <div class="card-image">
              <img id="img-1">
            </div>
            <div class="card-content">
              <p>Lasagne, or the singular lasagna, commonly refers to a culinary dish made with stacked layers of pasta alternated with sauces and ingredients such as vegetables and cheese.</p>
            </div>
          </div>
        </div>
        <div class="col s12 m4">
        <div class="card small">
          <div class="card-image">
            <img id="img-2">
          </div>
          <div class="card-content">
            <p>Pasta is a type of Italian food typically made from an unleavened dough of durum wheat flour.</p>
          </div>
        </div>
      </div>
      <div class="col s12 m4">
      <div class="card small">
        <div class="card-image">
          <img id="img-3">
        </div>
        <div class="card-content">
          <p>Pizza definition is - a dish made typically of flattened bread dough spread with a savory mixture usually including tomatoes and cheese and often other toppings.</p>
        </div>
      </div>
    </div>
      </div>`;
    menu.classList.add('menu');
    menu.style.display = 'none';
    content.appendChild(menu);
    const image1 = document.getElementById('img-1');
    image1.src = Image1;
    const image2 = document.getElementById('img-2');
    image2.src = Image2;
    const image3 = document.getElementById('img-3');
    image3.src = Image3;
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