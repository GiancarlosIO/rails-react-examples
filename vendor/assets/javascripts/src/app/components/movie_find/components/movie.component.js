import React from 'react';
import {Link, IndexLink} from 'react-router';

export default class Movie extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {movie} = this.props;
    return (
      <Link to={"/movies/"+movie.imdbID} className="movieList__item">
        <div className="movieList__item__header">
          <img src={movie.Poster} alt={movie.Title}/>
        </div>
        <div className="movieList__item__body">
          <p>
            Title:
            <span> {movie.Title}</span>
          </p>
          <p>Año:
            <span> {movie.Year}</span>
          </p>
        </div>
      </Link>
    )
  }
}
