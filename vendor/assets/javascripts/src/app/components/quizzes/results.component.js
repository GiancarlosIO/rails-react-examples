import React from 'react';

export default class Results extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    this.props.handleClick();
  }

  render() {
    let {score, questions} = this.props;
    let percent = (score / questions.length) * 100;
    let message = '';
    if (percent >= 80) {
      message = 'Nice fucking Job! :)';
    } else if (percent < 80 && percent >= 60) {
      message = 'So..you did ok :|'
    } else {
      message = 'Well...nice try dude but...you did horrible';
    }
    return (
      <div className="box">
        <h4>You got {this.props.score} out of {this.props.questions.length} correct</h4>
        <h1>{percent}% - {message}</h1>
        <button className="button button--medium button--emerald" onClick={this.onClick}>Take again</button>
      </div>
    )
  }
}
