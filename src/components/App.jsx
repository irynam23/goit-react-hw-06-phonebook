import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from 'redux/contactsSlice';

export const App = () => {
  const contacts = useSelector(state => state.contactData.contactsList);
  const filter = useSelector(state => state.contactData.filter);
  const dispatch = useDispatch();

  const handleAddContact = contact => {
    if (
      contacts.some(({ name }) => {
        return name.toLowerCase() === contact.name.toLowerCase();
      })
    ) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    dispatch(addContact(contact));
  };

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const getFilteredContacts = () => {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleAddContact={handleAddContact} />
      <h2>Contacts</h2>
      {contacts.length ? (
        <>
          <Filter />
          <ContactList
            contacts={getFilteredContacts()}
            handleDelete={handleDelete}
          />
        </>
      ) : (
        <p>No contacts added</p>
      )}
    </div>
  );
};
