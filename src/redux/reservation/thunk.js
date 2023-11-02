// reservationThunks.js

import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

const url = 'http://127.0.0.1:4000/api/v1'; // Replace with your API endpoint

export const fetchReservations = createAsyncThunk('reservations/fetchReservations', async (userId, thunkAPI) => {
  try {
    const response = await axios.get(`${url}/users/${userId}/reservations`);
    console.log('Redux Store State:', response.data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const createReservation = createAsyncThunk('reservations/createReservation', async ({ data }, thunkAPI) => {
  try {
    const response = await axios.post(`${url}/users/${data.userId}/reservations`, data);
    window.location.reload();
    thunkAPI.dispatch(fetchReservations());
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const cancelReservation = createAsyncThunk('reservations/cancelReservation', async (reservationId, thunkAPI) => {
  try {
    await axios.delete(`${url}/reservations/${reservationId}`);
    return reservationId; // Return the deleted reservation ID for optimistic UI update
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
