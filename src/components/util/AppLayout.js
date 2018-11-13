import React from 'react';
import Router from './Router';
import Navbar from './Navbar';

export default function AppLayout () {
  return (
    <div>
      <Navbar />
      <Router />
    </div>
  );
}
