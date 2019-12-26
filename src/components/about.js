const About =(() => {
  const renderAbout = () => {
    const content = document.getElementById('content');
    const about = document.createElement('div');
  
    about.innerHTML = `<h2>Testing ABOUT!</h2>`;
    about.classList.add('about');
    content.appendChild(about);
    console.log('testing about');
  }

  const aboutClass = document.querySelectorAll('.about');

  const showAbout = () => {
    aboutClass.style.display = 'block';
  }
  
  const removeAbout = () => {
    aboutClass.style.display = 'none';
  }

  return {
    renderAbout,
    showAbout,
    removeAbout
  }
})();


export default About;