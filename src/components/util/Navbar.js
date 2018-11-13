import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render () {
    return (
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/users'>Users</Link>
          </li>
          <li>
            <Link to='/courses'>Courses</Link>
            <ul>
              <li>
                <Link to='/courses/contents'>Contents</Link>
              </li>
              <li>
                <Link to='/courses/listings'>Listings</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to='/terms'>Terms</Link>
          </li>
        </ul>
      </div>
    );
  }
}
