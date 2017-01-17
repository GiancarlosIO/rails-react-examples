const MovieAPI = {
  getListMovie: (movie) => {
    return $.ajax({
      url: "http://www.omdbapi.com/?s=" + movie + "&r=json",
      dataType: "json",
      cache: false,
      success: (data) => { },
      error: (error) => { }

    })
  }
};
export default MovieAPI;
