import React from 'react';

import Repository from './repo.component';

export default class RepoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let {userRepos} = this.props;
    let repoList = userRepos.map((repo) => {
                    return (<Repository repo={repo} key={repo.id}/>)
                  });
    return (
      <div>
        <ul className="list-group">
          {
            repoList
          }
        </ul>
      </div>
    )
  }
}
