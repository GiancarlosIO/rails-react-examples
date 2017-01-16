import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';

import AppComponent from './components/app.component';
import GithubMainComponent from './components/github_profile/main.component';
import QuizMainComponent from './components/quizzes/main.component';
import MovieMainComponent from './components/movie_find/components/main.component';
import Children2Component from "./components/children2.component";

$(document).on('ready', () => {
  ReactDOM.render(
    <Router history={browserHistory}>
    <Route path="/" component={AppComponent}>
      <IndexRoute component={GithubMainComponent}></IndexRoute>
      <Route path="quizzes" component={QuizMainComponent}></Route>
      <Route path="moviesfind" component={MovieMainComponent}></Route>
    </Route>
  </Router>,
  document.getElementById('app-wrapper'))
});
