import React from 'react';

export default class Repository extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {repo} = this.props;
    return (
      <li className="list-group__item">
        <a href={repo.html_url} target="_blank">
          {repo.name}
        </a>: {repo.description}
      </li>
    )
  }
}
