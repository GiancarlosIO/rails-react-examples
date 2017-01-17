import React from 'react';

import MovieAPI from '../api/movie.api';

import SearchForm from './searchForm.component';

export default class MovieMainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.getMovieData = this.getMovieData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      movie: 'superman',
      movieData: {}
    }
  }

  getMovieData() {
    let {movie} = this.state;
    MovieAPI.getMovie(movie).then(
      (data) => {
        this.setState({
          movieData: data
        });
        console.log(this.state.movieData);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  componentDidMount() {
    this.getMovieData();
  }

  handleChange(movie) {
    this.setState({
      movie: movie
    }, ()=> {
      this.getMovieData();
    });
  }

  render() {
    let {movieData} = this.state;
    let showData = () => {
      if (movieData.error) {
        return ( <h4>movieData.error</h4> )
      } else {
        return ( <h1>{movieData.Title}</h1> )
      }
    };
    return (
      <div className="container">
        <SearchForm handleChange={this.handleChange} />
        {showData()}
      </div>
    )
  }
}
