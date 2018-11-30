import React from 'react';
import { NavLink } from 'react-router-dom';

export default function TermList () {
  return (
    <div>
      <h1>Terms</h1>
      <NavLink to='/terms/create'>Create</NavLink>
    </div>
  );
}
