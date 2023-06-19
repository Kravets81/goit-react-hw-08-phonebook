import ContactsForm from '../components/ContactsForm/ContactsForm';
import ContactsList from '../components/ContactsList/ContactsList';
import Filter from '../components/Filter/Filter';
import css from '../App/App.module.css';

import React from 'react';

export default function Contacts() {
  return (
    <>
      <div className={css.form__wrap}>
        <h1 className={css.form__title}>Phonebook</h1>
        <ContactsForm />

        <h2 className={css.filter__subtitle}>Contacts</h2>
        <Filter />
        <ContactsList />
      </div>
    </>
  );
}
