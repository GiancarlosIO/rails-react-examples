import React from 'react';

import Movie from './movie.component';

export default class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {moviesData} = this.props;
    let movieList = moviesData.Search.map((movie) => {
      return ( <Movie key={movie.imdbID} movie={movie} />)
    });
    return (
      <div className="row movies">
        <div className="column--10 movies__container">
          {movieList}
        </div>
      </div>
    )
  }
}
