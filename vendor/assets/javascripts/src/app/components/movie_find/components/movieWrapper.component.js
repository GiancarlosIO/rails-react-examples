import React from 'react';

import MovieAPI from '../api/movie.api';

import MovieShow from './movieShow.component';

export default class MovieWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.getMovieById = this.getMovieById.bind(this);
    this.state = {
      movieId: this.props.params.movie_id,
      movieData: {}
    }
  }

  getMovieById() {
    let {movieId} = this.state;
    MovieAPI.getMovieById(movieId).then(
      (data) => {
        this.setState({
          movieData: data
        })
      },
      (error) => {
        console.log('error');
        movieData: {Error: "Server Error"}
      }
    )
  }

  componentDidMount() {
    this.getMovieById();
  }

  render() {
    let {movieData} = this.state;
    let showData = () => {
      if (movieData.Error) {
        return (<h4>{movieData.Error}</h4>)
      } else if (movieData.Title) {
        return ( <MovieShow movieData={movieData} />)
      } else {
        return (<h4>Loading</h4>)
      }
    };
    return (
      <div className="container">
        {showData()}
      </div>
    )
  }
}
