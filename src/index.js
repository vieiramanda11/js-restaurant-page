import _ from 'lodash'
import './style.css';
import MainPage from './components/mainpage';
import About from './components/about';
import Contact from './components/contact';
import Menu from './components/menu';

const RenderPage = () => {
  MainPage.renderNavbar();
  MainPage.renderMainPage();
  About.renderAbout();
  Contact.renderContact();
  Menu.renderMenu();

  const logoTab = document.getElementById('init')
  const aboutTab = document.getElementById('about');
  const contactTab = document.getElementById('contact');
  const menuTab = document.getElementById('menu');

  logoTab.addEventListener('click', Menu.removeMenu);
  logoTab.addEventListener('click', Contact.removeContact);
  logoTab.addEventListener('click', About.removeAbout);
  logoTab.addEventListener('click', MainPage.showMainPage);

  aboutTab.addEventListener('click', Menu.removeMenu);
  aboutTab.addEventListener('click', Contact.removeContact);
  aboutTab.addEventListener('click', MainPage.removeMainPage);
  aboutTab.addEventListener('click', About.showAbout);

  contactTab.addEventListener('click', Menu.removeMenu);
  contactTab.addEventListener('click', About.removeAbout);
  contactTab.addEventListener('click', MainPage.removeMainPage);
  contactTab.addEventListener('click', Contact.showContact);

  menuTab.addEventListener('click', About.removeAbout);
  menuTab.addEventListener('click', Contact.removeContact);
  menuTab.addEventListener('click', MainPage.removeMainPage);
  menuTab.addEventListener('click', Menu.showMenu);
  
}

RenderPage();
