import { createSlice } from '@reduxjs/toolkit';
import { fetchReservations } from './thunk';

const initialState = {
  reservations: [],
  isLoading: false,
  error: false,
  errMsg: '',
};

const reservationsSlice = createSlice({
  name: 'reservationsList',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchReservations.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchReservations.fulfilled, (state, action) => {
      state.isLoading = false;
      state.reservations = action.payload;
      console.log('from action', state.reservations);
    });
    builder.addCase(fetchReservations.rejected, (state) => {
      state.error = true;
    });
  },
});
export default reservationsSlice.reducer;
