import React from 'react';
import {Link, IndexLink} from 'react-router';

const NavComponent = () =>
  <nav>
    <ul>
      <li><IndexLink to="/" activeClassName="link__active">Github Profile App</IndexLink></li>
      <li><Link to="/quizzes" activeClassName="link__active">Quiz App</Link></li>
      <li><Link to="/movies" activeClassName="link__active">MovieFind App</Link></li>
      <li><Link to="/weather" activeClassName="link__active">Weather App</Link></li>
      <li><Link to="/simplenote" activeClassName="link__active">Simplenote (copy)</Link></li>
      <li><Link to="/contact-list" activeClassName="link__active">Contact List(FLUX)</Link></li>
      <li><Link to="/sticky-pads" activeClassName="link__active">Sticky Pads(FLUX)</Link></li>
      <li><Link to="/admin-users" activeClassName="link__active">Admin Users(FLUX)</Link></li>
    </ul>
  </nav>
export default NavComponent;
