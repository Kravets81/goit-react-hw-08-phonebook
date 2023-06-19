import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../Redux/Auth/operations';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import css from './RegisterForm.module.css';

import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <form
      className={css.registerForm}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        id="outlined-basic-name"
        label="Name"
        variant="outlined"
        type="text"
        name="name"
        required
        fullWidth
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <TextField
        id="outlined-basic-email"
        label="Email"
        variant="outlined"
        type="email"
        name="email"
        required
        fullWidth
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <FormControl sx={{ m: 1, width: '100%', margin: 0 }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </FormControl>

      <Button
        type="submit"
        variant="contained"
        style={{
          width: '85px',
          textTransform: 'none',
        }}
        color="primary"
      >
        Register
      </Button>
    </form>
  );
}
