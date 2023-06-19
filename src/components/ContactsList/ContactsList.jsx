import React from 'react';
import { useEffect } from 'react';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from '../../Redux/Contacts/operations';

import Button from '@mui/material/Button';

export default function ContactsList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filterValue = useSelector(state => state.filter);

  const savedContacts = useSelector(state => {
    if (filterValue) {
      return state.contacts.items.filter(contact =>
        contact.name.toLowerCase().includes(filterValue.toLowerCase().trim())
      );
    } else {
      return state.contacts.items;
    }
  });

  const handleSubmit = e => {
    dispatch(deleteContact(e));
  };
  return (
    <div>
      <ul className={css.contact__list}>
        {savedContacts.map(contact => (
          <li className={css.contact__item} key={contact.id}>
            <span className={css.contact__span__name}>{contact.name}</span>:
            <span className={css.contact__span__number}>{contact.number}</span>
            <Button
              variant="outlined"
              style={{
                color: '#ec0d0d',
                borderColor: '#ec0d0d',
                textTransform: 'none',
                marginLeft: 'auto',
              }}
              type="submit"
              onClick={() => handleSubmit(contact.id)}
            >
              Delete
            </Button>
            {/* <button
              className={css.contact__button}
              onClick={() => handleSubmit(contact.id)}
            >
              Delete
            </button> */}
          </li>
        ))}
        {savedContacts.length === 0 && filterValue && (
          <li className={css.contact__item}>
            No contact found in the phonebook!
          </li>
        )}
      </ul>
    </div>
  );
}
