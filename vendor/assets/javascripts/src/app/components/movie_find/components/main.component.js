import React from 'react';

import MovieAPI from '../api/movie.api';

import SearchForm from './searchForm.component';
import MovieList from './movieList.component';

export default class MovieMainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.getMoviesData = this.getMoviesData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      movie: 'ring',
      moviesData: {}
    }
  }

  getMoviesData() {
    let {movie} = this.state;
    // only the $.ajax(..) return a xhr object (that has a abort method)
    this.xhrListMovie = MovieAPI.getListMovie(movie);
    // the xhrListMovie.then(..) return a promise
    this.promiseListMovie = this.xhrListMovie.then(
      (data) => {
        this.setState({
          moviesData: data
        });
      },
      (error) => {
        console.log('error data', error);
        this.setState( {moviesData: {Error: error.statusText}} );
      }
    );
  }

  componentDidMount() {
    this.getMoviesData();
  }

  componentWillUnmount() {
    if (this.xhrListMovie && this.xhrListMovie.abort) {
      this.xhrListMovie.abort();
    }
  }

  handleChange(movie) {
    this.setState({
      movie: movie
    }, ()=> {
      this.getMoviesData();
    });
  }

  render() {
    let {moviesData} = this.state;
    let showMovies = () => {
      if (moviesData.Error) {
        return ( <h4>{moviesData.Error}</h4> )
      } else if (moviesData.Search){
        return ( <MovieList moviesData={moviesData} />)
      } else {
        return ("Loading")
      }
    };
    return (
      <div className="container">
        <SearchForm handleChange={this.handleChange} />
        {showMovies()}
      </div>
    )
  }

}
