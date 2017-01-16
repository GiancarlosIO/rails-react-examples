import React from 'react';
import {Link, IndexLink} from 'react-router';

const NavComponent = () =>
  <nav>
    <ul>
      <li><IndexLink to="/" activeClassName="link__active">Github Profile</IndexLink></li>
      <li><Link to="/quizzes" activeClassName="link__active">Quiz App</Link></li>
      <li><Link to="/moviesfind" activeClassName="link__active">MovieFind FLUX App</Link></li>
    </ul>
  </nav>
export default NavComponent;
