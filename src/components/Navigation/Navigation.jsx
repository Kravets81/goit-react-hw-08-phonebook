import React from 'react';
import { useAuth } from 'hooks';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <NavLink
        exact="true"
        to="/"
        className={({ isActive }) => (isActive ? css.activeLink : '')}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          exact="true"
          to="/contacts"
          className={({ isActive }) => (isActive ? css.activeLink : '')}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
