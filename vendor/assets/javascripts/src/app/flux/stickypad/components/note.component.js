import React from 'react';

export default class Note extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {note} = this.props
    return (
      <div className="sticky-pad__note">
        <p>
          {note.text}
        </p>
      </div>
    )
  }
}

Note.propTypes = {
  note: React.PropTypes.object.isRequired
}
