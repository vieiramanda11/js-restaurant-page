import _ from 'lodash'
import './style.css';
import RenderNavbar from './components/navbar';
import About from './components/about';
import Contact from './components/contact';
import Menu from './components/menu';


const RenderPage = () => {
  RenderNavbar();
  // About.renderAbout();
  // Contact.renderContact();
  // Menu.renderMenu();

  const aboutTab = document.getElementById('about');
  const contactTab = document.getElementById('contact');
  const menuTab = document.getElementById('menu');

  aboutTab.addEventListener('click', Menu.removeMenu);
  aboutTab.addEventListener('click', Contact.removeContact);
  aboutTab.addEventListener('click', About.renderAbout);
  aboutTab.addEventListener('click', About.showAbout);

  contactTab.addEventListener('click', Menu.removeMenu);
  contactTab.addEventListener('click', About.removeAbout);
  contactTab.addEventListener('click', Contact.renderContact);
  contactTab.addEventListener('click', Contact.showContact);

  menuTab.addEventListener('click', About.removeAbout);
  menuTab.addEventListener('click', Contact.removeContact);
  menuTab.addEventListener('click', Menu.renderMenu);
  menuTab.addEventListener('click', Menu.showMenu);
  
}

RenderPage();
