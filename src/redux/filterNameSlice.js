import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    cangeArreyByFind(state,action){
       state.filter = action.payload
    } 
  },
});
export const {cangeArreyByFind} = filterSlice.actions;
export default filterSlice.reducer;
