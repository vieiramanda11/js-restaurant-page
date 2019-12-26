const Contact = (() => {

  const renderContact = () => {
    const content = document.getElementById('content');
    const contact = document.createElement('div');
  
    contact.innerHTML = `
    <h1 class="center-align">CONTACT US</h1>
    <div class="row">
    <form class="col s8 offset-m4">
      <div class="row">
        <div class="input-field col s3">
          <input id="first_name" type="text" class="validate">
          <label for="first_name">First Name</label>
        </div>
        <div class="input-field col s3">
          <input id="last_name" type="text" class="validate">
          <label for="last_name">Last Name</label>
        </div>
      </div>
      <div class="row">
      <div class="input-field col s6">
        <input id="email" type="email" class="validate">
        <label for="email">Email</label>
      </div>
    </div>
      <div class="row">
        <div class="input-field col s6">
          <input value="Write your message" type="text" class="validate">
          <label for="disabled">Message</label>
        </div>
      </div>
      <button class="btn waves-effect waves-light left red darken-3" type="submit" name="action">SUBMIT</button>
    </form>
  </div>`;
    contact.classList.add('contact');
    contact.style.display = 'none';
    content.appendChild(contact);
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
