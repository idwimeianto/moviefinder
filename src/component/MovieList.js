import DataSource from '../data/data-source';

class MovieList extends HTMLElement {
  connectedCallback() {
    this.renderInit();
  }

  set movies(movies) {
    this._movies = movies;
    this.renderData();
  }

  renderInit() {
    $(this).addClass('d-block mt-5 mb-5');
    // $(this).html(`
    //   <div class="alert alert-primary text-center" role="alert">
    //     Welcome to movie finder!!! 
    //   </div>
    // `);
    DataSource.getUpcomingMovie()
        .then((results) => {
          this.movies = results;
        })
        .catch((message) => {
          console.log(message);
        });
  }

  renderData() {
    $(this).html('');
    const rowElement = $('<div></div>', { class: 'row row-cols-1 row-cols-lg-2 g-3' });
    this._movies.forEach((movie) => {
      const movieItemElement = $('<movie-item></movie-item>')[0];

      movieItemElement.movie = movie;
      rowElement.append(movieItemElement);
    });
    $(this).append(rowElement);

    $('.card-text').dotdotdot({
      height: 126,
      fallbackToLetter: true,
      watch: true,
    });

    $('.card img').on('error', (e) => {
      $(e.currentTarget).attr('src', 'https://i.imgur.com/k5biziP.jpeg');
    });
  }

  renderError(errorMessage) {
    $(this).html(`
      <div class="alert alert-danger text-center" role="alert">
        ${errorMessage.message}
      </div>
    `);
  }
}

customElements.define('movie-list', MovieList);
