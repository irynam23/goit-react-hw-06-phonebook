import css from './ContactListItem.module.css';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.item}>
      {name}: {number}
      <button className={css.btn} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
