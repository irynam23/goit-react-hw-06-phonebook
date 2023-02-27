import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { selectContacts, selectFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filterContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );
  return (
    <div>
      <ul>
        {filterContacts.map(({ name, number, id }) => (
          <ContactListItem key={id} id={id} name={name} number={number} />
        ))}
      </ul>
    </div>
  );
};
