import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContacts } from './operations';

const setError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const setPending = state => {
  state.isLoading = true;
};

const extraActions = [fetchContacts, addContacts, deleteContacts];

const createExtraActions = type =>
  extraActions.map(extraAction => extraAction[type]);


const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addMatcher(isAnyOf(...createExtraActions('pending')), setPending)
      .addMatcher(isAnyOf(...createExtraActions('rejected')), setError)
      .addMatcher(isAnyOf(...createExtraActions('fulfilled')), state => {
        state.isLoading = false;
        state.error = null;
      });
  },
});

export default contactSlice.reducer;
