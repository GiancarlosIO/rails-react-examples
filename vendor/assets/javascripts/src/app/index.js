import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';

import AppComponent from './components/app.component';
import GithubMainComponent from './components/github_profile/main.component.js';
import QuizMainComponent from './components/quizzes/main.component.js';
import Children2Component from "./components/children2.component";

$(document).on('ready', () => {
  ReactDOM.render(
    <Router history={browserHistory}>
    <Route path="/" component={AppComponent}>
      <IndexRoute component={GithubMainComponent}></IndexRoute>
      <Route path="quizzes" component={QuizMainComponent}></Route>
    </Route>
  </Router>,
  document.getElementById('app-wrapper'))
});
