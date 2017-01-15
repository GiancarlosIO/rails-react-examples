import React from 'react';

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    const {setCurrent, setScore, question} = this.props;

    let selected = e.target.value;
    if (selected == question.correct) {
      setScore(this.props.score + 1)
    };

    setCurrent(this.props.current +1 );
  }

  render() {
    let {question} = this.props;
    let choices = question.choices.map((choice) => {
      return (
        <li className="list-group__item background-color--white" key={choice.id}>
          <label>
            <input type="radio" onChange={this.onChange} name={question.id} value={choice.id}/>
            {choice.id} ) {choice.text}
          </label>
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
