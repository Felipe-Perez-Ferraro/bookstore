import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const apiId = '8HKs07tY8RLa43wl4nmx';

const initialState = { books: [] };

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  const response = await axios.get(`${URL}/apps/${apiId}/books`);
  return response.data;
});

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  const itemId = Date.now();
  await axios.post(`${URL}/apps/${apiId}/books`, {
    ...book,
    item_id: itemId,
  });
  return {
    ...book,
    item_id: itemId,
  };
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  await axios.delete(`${URL}/apps/${apiId}/books/${id}`);
  return id;
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.fulfilled, (state, action) => {
        const obj = action.payload;
        const bookArray = Object.keys(obj).map((ind) => ({
          item_id: ind,
          title: obj[ind][0].title,
          author: obj[ind][0].author,
          category: obj[ind][0].category,
        }));
        state.books = bookArray;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.books.push(action.payload);
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        const bookFilter = state.books.filter(
          (book) => book.item_id !== action.payload,
        );
        state.books = bookFilter;
      });
  },
});

export default booksSlice.reducer;
