import { NavLink } from 'react-router-dom';

import React from 'react';
import css from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div>
      <NavLink
        exact={true.toString()}
        to="/register"
        className={({ isActive }) => (isActive ? css.activeLink : '')}
      >
        Register
      </NavLink>
      <NavLink
        exact={true.toString()}
        to="/login"
        className={({ isActive }) => (isActive ? css.activeLink : '')}
      >
        Log In
      </NavLink>
    </div>
  );
}
