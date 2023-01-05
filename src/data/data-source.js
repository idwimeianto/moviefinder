const apiKey = '0c7320ecf8988d731b642fd6b32a85ad';

class DataSource {
  static searchMovie(keyword) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${keyword}&include_adult=false`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.results.length) {
          return Promise.resolve(responseJson.results);
        }
        return Promise.reject(new Error(`${keyword} is not found`));
      });
  }
}

export default DataSource;
