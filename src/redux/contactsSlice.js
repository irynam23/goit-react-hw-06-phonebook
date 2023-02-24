import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  contactsList: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',

  initialState,

  reducers: {
    addContact(state, action) {
      const newContact = { ...action.payload, id: nanoid() };
      state.contactsList.push(newContact);
    },

    deleteContact(state, action) {
      state.contactsList = state.contactsList.filter(
        contact => contact.id !== action.payload
      );
    },
    setFilter(state, action) {
      state.filter = action.payload.trim().toLowerCase();
    },
  },
});

export const { addContact, deleteContact, setContacts, setFilter } =
  contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
