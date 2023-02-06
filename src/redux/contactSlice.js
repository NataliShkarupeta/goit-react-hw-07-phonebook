import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContacts } from './operations';

const setError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const setPending = state => {
  state.isLoading = true;
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending]: setPending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [fetchContacts.rejected]: setError,

    [addContacts.pending]: setPending,
    [addContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.push(action.payload);
    },
    [addContacts.rejected]: setError,

    [deleteContacts.pending]: setPending,
    [deleteContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      // const index = state.contacts.findIndex(
      //   contact => contact.id === action.payload.id
      // );
      // state.contacts.splice(index, 1);
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload.id
      );
    },
    [deleteContacts.rejected]: setError,
  },
});

// export const { addContacts, deleteContacts, fetchContacts } =
//   contactSlice.actions;
export default contactSlice.reducer;
