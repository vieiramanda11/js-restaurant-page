const About =(() => {
  const renderAbout = () => {
    const content = document.getElementById('content');
    const about = document.createElement('div');
  
    about.innerHTML = `<h2>Testing ABOUT!</h2>`;
    about.classList.add('about');
    about.style.display = 'none';
    content.appendChild(about);
    console.log('testing about');
  }

  const showAbout = () => {
    const aboutClass = document.querySelector('.about');
    aboutClass.style.display = 'block';
  }
  
  const removeAbout = () => {
    const aboutClass = document.querySelector('.about');
    aboutClass.style.display = 'none';
  }

  return {
    renderAbout,
    showAbout,
    removeAbout
  }
})();


export default About;