import React from 'react';
import {Link, IndexLink} from 'react-router';

const NavComponent = () =>
  <nav>
    <ul>
      <li><IndexLink to="/" activeClassName="link__active">Github Profile App</IndexLink></li>
      <li><Link to="/quizzes" activeClassName="link__active">Quiz App</Link></li>
      <li><Link to="/movies" activeClassName="link__active">MovieFind App</Link></li>
      <li><Link to="/imgur" activeClassName="link__active">Imgur App</Link></li>
    </ul>
  </nav>
export default NavComponent;
