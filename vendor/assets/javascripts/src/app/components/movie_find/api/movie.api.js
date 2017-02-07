const MovieAPI = {
  getListMovie: (movie) => {
    return $.ajax({
      url: "http://www.omdbapi.com/?s=" + movie,
      dataType: "json",
      cache: false,
      success: (data) => { },
      error: (error) => { }
    });
  },
  getMovieById: (movieId) => {
    return $.ajax({
      url: "http://www.omdbapi.com/?i=" + movieId + "&plot=full",
      dataType: "json",
      cache: false,
      success: (data) => { },
      error: (error) => { }
    });
  }
};
export default MovieAPI;
