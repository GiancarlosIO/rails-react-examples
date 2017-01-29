import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';

import AppComponent from './components/app.component';
import GithubMainComponent from './components/github_profile/main.component';
import QuizMainComponent from './components/quizzes/main.component';
import MovieMainComponent from './components/movie_find/components/main.component';
import MovieWrapperComponent from './components/movie_find/components/movieWrapper.component';
import ImgurMainComponent from './components/imgur/main.component';

$(document).on('ready', () => {
  ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={AppComponent}>
        <IndexRoute component={GithubMainComponent}></IndexRoute>
        <Route path="/quizzes" component={QuizMainComponent}></Route>
        <Route path="/movies" component={MovieMainComponent}></Route>
        <Route path="/movies/:movie_id" component={MovieWrapperComponent}></Route>
        <Route path="/imgur" component={ImgurMainComponent}></Route>
      </Route>
    </Router>,
  document.getElementById('app-wrapper'))
});
