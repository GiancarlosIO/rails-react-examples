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
      movie: 'superman',
      moviesData: {}
    }
  }

  getMoviesData() {
    let {movie} = this.state;
    MovieAPI.getListMovie(movie).then(
      (data) => {
        this.setState({
          moviesData: data
        });
      },
      (error) => {
        console.log(error);
      }
    )
  }

  componentDidMount() {
    this.getMoviesData();
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
