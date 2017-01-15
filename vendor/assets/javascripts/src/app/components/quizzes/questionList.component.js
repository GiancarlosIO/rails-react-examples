import React from 'react';

import Question from './question.component';

export default class QuestionList extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    let {questions, current} = this.props;
    let questionsList = questions.map((question) => {
      if (question.id === current) {
        return (<Question question={question} key={question.id} {...this.props} />)
      }
    });
    return (
      <div className="container container__items">
        {questionsList}
      </div>
    )
  }
}
