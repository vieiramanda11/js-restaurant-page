const RenderNavbar = () => {
  const content = document.getElementById('content');
  const navbar = document.createElement('nav');
  
  navbar.innerHTML = `
  <div class="nav-wrapper navigation navigation container">
    <a id ="init" href="#" class="brand-logo">Logo</a>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li><a id="about" href="#">About</a></li>
      <li><a id="menu" href="#">Menu</a></li>
      <li><a id="contact" href="#">Contact</a></li>
    </ul>
  </div>`;

  content.appendChild(navbar);
}

export default RenderNavbar;