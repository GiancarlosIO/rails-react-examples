import React from 'react';

export default class ScoreBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="box flex flex--row flex--row--between">
        <p>Question {this.props.current} out of {this.props.questions.length}</p>
        <p>
          <strong>Score: {this.props.score}</strong>
        </p>
      </div>
    )
  }
}
