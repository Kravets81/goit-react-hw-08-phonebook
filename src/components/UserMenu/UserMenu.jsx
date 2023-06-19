import React from 'react';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from '../../Redux/Auth/operations';
import Button from '@mui/material/Button';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { isUser } = useAuth();

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.userWrapper}>
      <p className={css.userTitle}>Welcome, {isUser.name}</p>
      <Button
        variant="outlined"
        style={{
          color: '#ec0d0d',
          borderColor: '#ec0d0d',
          textTransform: 'none',
        }}
        type="submit"
        onClick={handleClick}
      >
        LogOut
      </Button>
    </div>
  );
}
