import React from 'react';

// Components
import Profile from './profile.component';
import SearchBox from './search.component';
// API service
import githubAPI from './api/githubAPI.js';

export default class GithubMainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.getUserData = this.getUserData.bind(this);
    this.getUserRepo = this.getUserRepo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      username: 'giancarlosio',
      userData: [],
      userRepos: [],
      perPage: 5
    };
  }

  // api functions
  getUserData() {
    let {clientId, clientSecret} = this.props;
    let {username, perPage} = this.state;
    let userDataPromise = githubAPI.getUserData(clientId, clientSecret, username);
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
    );
  }
  getUserRepo() {
    let {clientId, clientSecret} = this.props;
    let {username, perPage} = this.state;
    let userRepoPromise = githubAPI.getUserRepo(clientId, clientSecret, username, perPage);
    userRepoPromise.then(
      (data) => {
        console.log('repos data promise', data)
        this.setState((prevState, props)=>{
          return {
            userRepos: data
          }
        })
      },
      (error) => {
        console.log('error userRepo', error)
      }
    );
  }
  componentDidMount() {
    this.getUserData();
    this.getUserRepo();
  }

  handleSubmit(username) {
    this.setState({
      username: username
    }, ()=>{
      console.log(this.state.username);
      // update the props used in profile component
      this.getUserData();
      this.getUserRepo();
    });
  }

  handleChange(username) {
    this.setState({
      username: username
    }, () => {
      this.getUserData();
      this.getUserRepo();
    });
  }

  render() {
    return (
      <div>
        <h1>Github Profile</h1>
        <SearchBox onSubmit={this.handleSubmit} onChange={this.handleChange}/>
        <Profile {...this.state} />
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
