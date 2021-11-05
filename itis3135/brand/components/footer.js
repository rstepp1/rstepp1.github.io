class Footer extends HTMLElement {
  constructor() {
    super();
  }


 connectedCallback() {
    this.innerHTML = `
	<footer>
		<p>
			Page built by Radiant Sea Urchin LLC. 2021.
		</p>
		<a href="https://validator.w3.org/check?uri=referer">
			<img src="images/button-valid-html5.gif" width="88" height="31" alt="Link to HTML validator">
		</a>

		<a href="https://jigsaw.w3.org/css-validator/check/referer">
			<img src="images/button-valid-css.gif" width="88" height="31" alt="Link to CSS validator">
		</a>
    </footer>
    `;
  }
}

customElements.define('footer-component', Footer);