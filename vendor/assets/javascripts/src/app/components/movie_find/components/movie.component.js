import React from 'react';

export default class Movie extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {movie} = this.props;
    return (
      <div className="movie__item">
        <div className="movie__item__header">
          <img src={movie.Poster} alt={movie.Title}/>
        </div>
        <div className="movie__item__body">
          <p>
            Title:
            <span> {movie.Title}</span>
          </p>
          <p>Año:
            <span> {movie.Year}</span>
          </p>
        </div>
      </div>
    )
  }
}
