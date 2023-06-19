import React, { useState } from 'react';
import css from './ContactsForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../Redux/Contacts/operations';
import { getContacts } from '../../Redux/selectors';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function ContactsForm() {
  const dispatch = useDispatch();
  const savedContacts = useSelector(getContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = e => {
    const { value } = e.target;

    setName(value);
  };

  const handleNumberChange = value => {
    const formattedValue = value.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{2})(\d{2})$/,
      '($1) $2-$3-$4-$5'
    );

    setNumber(formattedValue);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isContactExists = savedContacts.some(
      contact => contact.name === name || contact.number === number
    );

    if (!isContactExists) {
      dispatch(addContact({ name, number }));
    } else {
      alert('Contact already exists!');
    }

    reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        type="text"
        name="name"
        required
        fullWidth
        onChange={handleNameChange}
        value={name}
      />

      <PhoneInput
        containerClass={css.formContainer}
        inputClass={css.formInput}
        required
        country={'ua'}
        onlyCountries={['ua']}
        masks={{ ua: '(...) ..-..-..' }}
        value={number}
        onChange={handleNumberChange}
        placeholder={'+380'}
      />

      <Button
        variant="outlined"
        type="submit"
        style={{
          color: 'success',
          borderColor: 'success',
          textTransform: 'none',
        }}
      >
        Add contact
      </Button>
    </form>
  );
}
