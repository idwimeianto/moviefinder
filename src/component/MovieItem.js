class MovieItem extends HTMLElement {
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    const {
      title, release_date: releaseDate, overview, poster_path: posterPath,
    } = this._movie;
    const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

    $(this).addClass('col');
    $(this).html(`
      <div class="card">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${imgBaseUrl}${posterPath}" class="img-fluid rounded-start">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <p class="card-subtitle mb-2 text-muted">${releaseDate}</p>
              <p class="card-text">${overview}</p>
            </div>
          </div>
        </div>
      </div>
    `);
  }
}

customElements.define('movie-item', MovieItem);
