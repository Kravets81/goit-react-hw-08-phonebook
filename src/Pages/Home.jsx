import React from 'react';
import { useAuth } from 'hooks';
// import { CssBaseline } from '@mui/material';
import css from '../App/App.module.css';

export default function Home() {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      {isLoggedIn ? (
        <h2 className={css.homePageSubTitle}>
          Your contacts forever etched, with me, they'll never be neglected!
        </h2>
      ) : (
        <h2 className={css.homePageSubTitle}>
          Please, Sign up or Log in to have access to the Phonebook!
        </h2>
      )}
    </div>
  );
}
