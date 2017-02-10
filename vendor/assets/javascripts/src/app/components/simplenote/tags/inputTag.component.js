import React from 'react';

export default class InputTagComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="column--8">
        <input type="text" placeholder="tag" className="input__text"/>
      </div>
    )
  }
}
