const Contact = (() => {

  const renderContact = () => {
    const content = document.getElementById('content');
    const contact = document.createElement('div');
  
    contact.innerHTML = `<h2>Testing Contact!</h2>`;
    contact.classList.add('contact');
    content.appendChild(contact);
    console.log('testing contact');
  }

  const showContact = () => {
    const contactClass = document.querySelector('.contact');
    contactClass.style.display = 'block';
  }
  
  const removeContact = () => {
    const contactClass = document.querySelector('.contact');
    contactClass.style.display = 'none';
  }
  
  return {
    renderContact,
    showContact,
    removeContact
  }
})();

export default Contact;
