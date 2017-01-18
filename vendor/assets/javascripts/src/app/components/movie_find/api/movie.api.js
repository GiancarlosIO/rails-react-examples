const MovieAPI = {
  getListMovie: (movie) => {
    return $.ajax({
      url: "https://www.omdbapi.com/?s=" + movie + "&r=json",
      dataType: "json",
      cache: false,
      success: (data) => { },
      error: (error) => { }
    });
  },
  getMovieById: (movieId) => {
    return $.ajax({
      url: "https://www.omdbapi.com/?i=" + movieId + "&plot=full&r=json",
      dataType: "json",
      cache: false,
      success: (data) => { },
      error: (error) => { }
    });
  }
};
export default MovieAPI;
