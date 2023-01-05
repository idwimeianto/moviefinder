import '../component/SearchBar';
import '../component/AppBar';
import '../component/MovieItem';
import '../component/MovieList';
import DataSource from '../data/data-source';

const main = () => {
  const searchElement = $('search-bar')[0];
  const movieListElement = $('movie-list')[0];

  const renderResult = (results) => {
    movieListElement.movies = results;
  };

  const fallbackResult = (message) => {
    movieListElement.renderError(message);
  };

  const onSubmitSearch = (e) => {
    e.preventDefault();
    if (searchElement.value.length) {
      DataSource.searchMovie(searchElement.value)
        .then(renderResult)
        .catch(fallbackResult);
    }
  };

  searchElement.submitEvent = onSubmitSearch;
};

export default main;
