import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setFilterValue } from 'Redux/Contacts/FilterContactSlice';
import css from './Filter.module.css';
import { getContacts } from '../../Redux/selectors';
import TextField from '@mui/material/TextField';

export default function Filter() {
  const savedContacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilterValue(e.target.value));
  };

  return (
    <>
      {savedContacts.length === 0 ? (
        <p>
          There are no contacts in your phonebook. Please add your first
          contact!
        </p>
      ) : (
        <label className={css.filter__label}>
          {/* Find contacts by name: */}
          {/* <input
            className={css.filter__input}
            type="text"
            name="filter"
            onChange={handleChange}
          /> */}
          <TextField
            id="outlined-basic"
            label="Find contacts by name"
            variant="outlined"
            type="text"
            name="name"
            required
            fullWidth
            onChange={handleChange}
          />
        </label>
      )}
    </>
  );
}
