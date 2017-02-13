import React from 'react';

export default class SelectTagComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="column--4 flex-center position-fixed note__column-left note__select">
        <select>
          <option>Tag 1</option>
          <option>Tag 2</option>
          <option>Tag 3</option>
          <option>Tag 4</option>
        </select>
      </div>
    )
  }
}
