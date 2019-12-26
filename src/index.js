import _ from 'lodash'
import './style.css';
import RenderNavbar from './components/navbar';
import About from './components/about';
import Contact from './components/contact';
import Menu from './components/menu';


const RenderPage = () => {
  RenderNavbar();
  About.renderAbout();
  Contact.renderContact();
  Menu.renderMenu();
  // const content = document.getElementById('content');
  // const aboutTab = document.getElementById('about');
  // const contactTab = document.getElementById('contact');
  // const menuTab = document.getElementById('menu');

  // // const classAbout = document.querySelector('.about');
  // // const classMenu = document.querySelector('.menu');
  // // const classContact = document.querySelector('.contact');

  // document.getElementById('about').addEventListener('click', function() {
  //   RenderAbout();
  // });

  // document.getElementById('contact').addEventListener('click', RenderContact);
  // document.getElementById('contact').addEventListener('click', RemoveAbout);


  // document.getElementById('menu').addEventListener('click', function() {

  //   RenderMenu();
  // });

  // contactTab.getElementById('contact').addEventListener('click', RenderContact);

  // menuTab.getElementById('menu').addEventListener('click', RenderMenu);
  
}

RenderPage();
