import React from 'react';

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    console.log('holi');
  }

  render() {
    let {question} = this.props;
    let choices = question.choices.map((choice) => {
      return (
        <li className="list-group__item background-color--white" key={choice.id}>
          {choice.id} <input type="radio" onChange={this.onChange} name={question.id} value={choice.id}/> {choice.text}
        </li>
      )
    });
    return (
      <div className="background-color--turquiose padding--20">
        <h3 className="text--white">{question.text}</h3>
        <hr className="hr background-color--white"/>
        <ul className="list-group">
          {choices}
        </ul>
      </div>
    )
  }
}
