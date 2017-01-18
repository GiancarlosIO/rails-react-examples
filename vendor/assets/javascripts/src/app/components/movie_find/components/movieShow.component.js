import React from 'react';

export default class MovieShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let {movieData} = this.props;
    return (
      <div className="movie">
        <div className="movie__poster">
          <img src={movieData.Poster} />
        </div>
        <div className="movie__info">
          <div className="movie__info__row">
            <span>Title: </span>
            <p>
              {movieData.Title}
            </p>
          </div>
          <div className="movie__info__row">
            <span>Year: </span>
            <p>
              {movieData.Year}
            </p>
          </div>
          <div className="movie__info__row">
            <span>Released: </span>
            <p>
              {movieData.Released}
            </p>
          </div>
          <div className="movie__info__row">
            <span>Runtime: </span>
            <p>
              {movieData.Runtime}
            </p>
          </div>
          <div className="movie__info__row">
            <span>Genre: </span>
            <p>
              {movieData.Genre}
            </p>
          </div>
          <div className="movie__info__row">
            <span>Director: </span>
            <p>
              {movieData.Director}
            </p>
          </div>
          <div className="movie__info__row">
            <span>Writer: </span>
            <p>
              {movieData.Writer}
            </p>
          </div>
          <div className="movie__info__row">
            <span>Actors: </span>
            <p>
              {movieData.Actors}
            </p>
          </div>
          <div className="movie__info__row">
            <span>Plot: </span>
            <p>
              {movieData.Plot}
            </p>
          </div>
          <div className="movie__info__row">
            <span>Language: </span>
            <p>
              {movieData.Language}
            </p>
          </div>
          <div className="movie__info__row">
            <span>Country: </span>
            <p>
              {movieData.Country}
            </p>
          </div>
          <div className="movie__info__row">
            <span>Awards: </span> 
            <p>
              {movieData.Awards}
              </p>
          </div>
        </div>
      </div>
    )
  }
}
