class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set submitEvent(event) {
    this._submitEvent = event;
    this.render();
  }

  get value() {
    return $(this).find('#search-element')[0].value;
  }

  render() {
    $(this).html(`
        <form id="searchForm" class="d-flex">
          <input class="form-control me-2" type="search" id="search-element" placeholder="Search Movie Title" aria-label="Search">
          <button class="btn btn-outline-light" type="submit">Search</button>
        </form>
    `);

    $('#searchForm').on('submit', this._submitEvent);
  }
}

customElements.define('search-bar', SearchBar);
