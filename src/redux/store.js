import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './books/booksSlice';
import categoriesSlice from './categories/categoriesSlice';
import usersSlice from './users/usersSlice';

const store = configureStore({
  reducer: {
    books: booksSlice,
    categories: categoriesSlice,
    users: usersSlice,
  },
});

export default store;
