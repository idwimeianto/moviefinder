class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    $(this).addClass('container');
    $(this).html(`
      <span class="navbar-brand mb-0 h1">Movie Finder</span>
    `);
    $(this).append('<search-bar></search-bar>');
  }
}

customElements.define('app-bar', AppBar);
