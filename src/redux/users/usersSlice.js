import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isLoading: false,
  users: [],
  error: '',
};

export const usersData = createAsyncThunk('user/userData', async () => {
  try {
    const response = await axios.get('https://randomuser.me/api/?results=5');
    return response.data.results;
  } catch (error) {
    return isRejectedWithValue(error);
  }
});

const usersSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(usersData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(usersData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
      state.error = '';
    });
    builder.addCase(usersData.rejected, (state, action) => {
      state.isLoading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

export default usersSlice.reducer;
