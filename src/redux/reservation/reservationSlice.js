// src/redux/reservationSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reservations: [],
  isLoading: false,
  error: false,
  errMsg: '',
};

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
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
});

export const {
  setReservations,
  setLoading,
  setError,
  setErrorMessage,
} = reservationsSlice.actions;

export default reservationsSlice.reducer;
