class Menu extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
    this.innerHTML = `
  <div>
		<a href="index.html">Brand Page</a> 
        ||
		<a href="contact.html">Contact</a>
		||
		<a href="services.html">Services</a>
		</div>
  `;
  }
}

customElements.define('menu-component', Menu);