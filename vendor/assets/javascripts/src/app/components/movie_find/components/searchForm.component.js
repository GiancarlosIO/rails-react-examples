import React from 'react';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this)
  }

  onChange() {
    let movie = this.refs.title.value;
    if (movie.length > 0) {
      this.props.handleChange(movie);
    } else {
      this.props.handleChange('superman');
    }
  }

  render() {
    return (
      <div className="row">
        <div className="column--10">
          <h4 className="text--center">Search for a Movie</h4>
          <div className="form">
            <input onChange={this.onChange} className="form__input full-width" type="text" ref="title" placeholder="Write a movie title..." />
          </div>
        </div>
      </div>
    )
  }
}
