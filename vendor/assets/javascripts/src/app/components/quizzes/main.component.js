import React from 'react';

import QuestionList from './questionList.component';
import ScoreBox from './scoreBox.component';
import Results from './results.component';

export default class QuizMainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.setCurrent = this.setCurrent.bind(this);
    this.setScore = this.setScore.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      questions: [
        {
          id: 1,
          text: 'What is your name?',
          choices: [
            {
              id: 'a',
              text: 'Miguel'
            },
            {
              id: 'b',
              text: 'Jose'
            },
            {
              id: 'c',
              text: 'Giancarlos'
            }
          ],
          correct: 'c'
        },
        {
          id: 2,
          text: 'What is your last name?',
          choices: [
            {
              id: 'a',
              text: 'Oyolo'
            },
            {
              id: 'b',
              text: 'Isasi'
            },
            {
              id: 'c',
              text: 'Fernando'
            }
          ],
          correct: 'b'
        },
        {
          id: 3,
          text: 'What is your fathers name?',
          choices: [
            {
              id: 'a',
              text: 'Jose'
            },
            {
              id: 'b',
              text: 'Jhon'
            },
            {
              id: 'c',
              text: 'Julian'
            }
          ],
          correct: 'c'
        },
        {
          id: 4,
          text: 'What is your friends name?',
          choices: [
            {
              id: 'a',
              text: 'Naraku'
            },
            {
              id: 'b',
              text: 'Miguel'
            },
            {
              id: 'c',
              text: 'Luis'
            }
          ],
          correct: 'a'
        }
      ],
      score: 0,
      current: 1
    }
  }

  setScore(score) {
    this.setState({score})
  }

  setCurrent(current) {
    this.setState({current})
  }

  handleClick() {
    this.setState({
      score: 0,
      current: 1
    });
  }

  render() {
    let {current, questions} = this.state;
    let searchBoxOrResults = () => {
      return current <= questions.length ? (<ScoreBox {...this.state} />) : (<Results {...this.state} handleClick={this.handleClick}/>)
    }
    return (
      <div className="container">
        {searchBoxOrResults()}
        <QuestionList {...this.state} setCurrent= {this.setCurrent} setScore={this.setScore}/>
      </div>
    )
  }
}
