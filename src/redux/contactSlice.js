import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContacts } from './operations';
     
const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  

    extraReducers: {
      [fetchContacts.pending](state) {
        state.isLoading = true;
      },
      [fetchContacts.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;

        state.contacts = action.payload;
      },
      [fetchContacts.rejected](state, action) {
        state.isLoading = false;
        state.error = action.payload;
      },

      [addContacts.pending](state) {
        state.isLoading = true;
      },
      [addContacts.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        state.contacts.push(action.payload);
      },
      [addContacts.rejected](state, action) {
        state.isLoading = false;
        state.error = action.payload;
      },
      
      [deleteContacts.pending](state) {
        state.isLoading = true;
      },
      [deleteContacts.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        const index = state.contacts.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.splice(index, 1);
      },
      [deleteContacts.rejected](state, action) {
        state.isLoading = false;
        state.error = action.payload;
      },
    },
  
});

// export const { addContacts, deleteContacts, fetchContacts } =
//   contactSlice.actions;
export default contactSlice.reducer;
