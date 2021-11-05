class Header extends HTMLElement {
  constructor() {
    super();
  }


connectedCallback() {
    this.innerHTML = `
	<header>
			<a href="images/sea-urchin.png" style="display:inline;vertical-align:middle">
			    <img src="images/sea-urchin.png" alt="sea urchin logo created by myself" style="width:10%;height:auto;" >
			</a>
			<h1 style="display:inline; white-space:nowrap;" >
				Radiant Sea Urchin LLC.
			</h1>
			<hr>
	</header>
    `;
  }
}
customElements.define('header-component', Header);