import React from 'react';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {name, avatar_url, public_repos, public_gists, followers, following, login, location, email, html_url} = this.props.userData;
    return (
      <div className="panel">
        <div className="panel__header">
          {name}
        </div>
        <div className="panel__body">
          <div className="row">
            <div className="column--3">
              <img src={avatar_url} />
            </div>
            <div className="column--7">
              <div className="container">
                <div className="column--10">
                  <div className="flex flex--row flex--row--space-around">
                    <span className="label label--red">{public_repos} repos</span>
                    <span className="label label--blue">{public_gists} gists</span>
                    <span className="label label--grey">{followers} followers</span>
                    <span className="label label--orange">{following} following</span>
                  </div>
                  <div className="flex flex--column flex--column--start" >
                    <ul className="list-group">
                      <li className="list-group__item"><strong>Username: </strong> {login}</li>
                      <li className="list-group__item"><strong>Location: </strong> {location}</li>
                      <li className="list-group__item"><strong>Email: </strong> {email}</li>
                    </ul>
                  </div>
                  <div className="flex flex--row flex--row--start">
                    <a className="button button--medium button--blue" href={html_url} target="_blank"> Visit profile </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
