import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = ({ target }) => {
    dispatch(setFilter(target.value));
  };
  return (
    <div className={css.wrap}>
      <p>Find contacts by name</p>
      <input type="text" onChange={handleFilterChange} />
    </div>
  );
};
