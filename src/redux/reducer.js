import contactReduser from './contactSlice';
import filterReduser from './filterNameSlice';
import { combineReducers } from '@reduxjs/toolkit';

export const reducer = combineReducers({
  contacts: contactReduser,
  filter: filterReduser,
});
