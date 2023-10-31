// src/redux/reservationSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { fetchReservations } from './thunk'; // Update the import path based on your project structure

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState: {
    reservations: [],
    isLoading: false,
    error: false,
    errMsg: '',
  },
  reducers: {
    setReservations: (state, action) => {
      state.reservations = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.errMsg = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchReservations.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchReservations.fulfilled, (state, action) => {
      state.isLoading = false;
      const data = action.payload;
      const mappedReservations = data.map((reservation) => ({
        id: reservation.id, // Assuming your reservation object has an 'id' property
        itemName: reservation.itemName, // Replace with the correct property names
        date: reservation.date,
        city: reservation.city,
        // ... map other properties here
      }));
      state.reservations = mappedReservations;
    });
    builder.addCase(fetchReservations.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.errMsg = action.payload; // Assuming the error message is provided in the payload
    });
  },
});

export const {
  setReservations,
  setLoading,
  setError,
  setErrorMessage,
} = reservationsSlice.actions;

export default reservationsSlice.reducer;
