import React from 'react';

// Components
import Profile from './profile.component';
// API service
import githubAPI from './api/githubAPI.js';

export default class GithubMainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'giancarlosio',
      userData: [],
      userRepos: [],
      perPage: 5
    };
  }

  componentDidMount() {
    let userDataPromise = githubAPI.getUserData(this.props.clientId, this.props.clientSecret, this.state.username);
    userDataPromise.then(
      (data)=>{
        console.log('data of promise', data);
        this.setState((prevState, props)=>{
          return {
            userData: data
          }
        });
      },
      (error)=>{
        console.log('error of promise', error);
        this.setState((prevState, props)=>{
          return {
            username: 'none'
          }
        });
      }
    )
  }

  render() {
    return (
      <div>
        <h1>Github Profile</h1>
        <Profile userData={this.state.userData} />
      </div>
    )
  }
}
GithubMainComponent.propTypes = {
  clientId: React.PropTypes.string,
  clientSecret: React.PropTypes.string
};
GithubMainComponent.defaultProps = {
  clientId: 'a8274030a947f5ce123d',
  clientSecret: '705f02a679ae35797593b63a29839ce965a41273'
}
