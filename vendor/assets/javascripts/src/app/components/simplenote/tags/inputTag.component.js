import React from 'react';

export default class InputTagComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="column--6 note__column-right note__tag">
        <input type="text" placeholder="tag" className="input__text"/>
      </div>
    )
  }
}
