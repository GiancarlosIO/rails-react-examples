const MovieAPI = {
  getMovie: (movie) => {
    return $.ajax({
      url: "http://www.omdbapi.com/?t=" + movie,
      dataType: "json",
      cache: false,
      success: (data) => { },
      error: (error) => { }

    })
  }
};
export default MovieAPI;
