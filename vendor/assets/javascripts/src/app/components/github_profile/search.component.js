import React from 'react';

export default class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let username = this.refs.username.value;
    if (username.length > 0) {
      this.refs.username.value = ''
      this.props.onSubmit(username);
    } else {
      alert('please enter a username');
    }
  }

  handleChange() {
    let username = this.refs.usernameChange.value;
    if (username.length > 0) {
      this.props.onChange(username);
    } else if (username.length === 0) {
      this.props.onChange('giancarlosio')
    }
  }

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <label>Search Github Users</label>
          <input type="text" ref="username" className="form__input" placeholder="Github username"/>
          <input type="submit" value="search" className="button button--medium button--emerald"/>
        </form>
        <form className="form">
          <label>Search writing a github username</label>
          <input className="form__input" ref="usernameChange" type="text" onChange={this.handleChange} placeholder="Write a Github username"/>
        </form>
      </div>
    )
  }
}
