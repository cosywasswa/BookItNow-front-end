import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://127.0.0.1:4000/api/v1';
const urlDoc = 'http://[::1]:4000/api/v1/doctors';

export const fetchDoctors = createAsyncThunk('doctors/fetchDoctors', async (thunkAPI) => {
  try {
    const response = await axios.get(`${url}/doctors`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const fetchDoctor = createAsyncThunk('doctors/fetchDoctor', async (id, thunkAPI) => {
  try {
    const response = await axios.get(`${url}/doctors/${id}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const createDoctor = createAsyncThunk('doctors/createDoctor', async (data, thunkAPI) => {
  try {
    const response = await axios.post(urlDoc, data);
    thunkAPI.dispatch(fetchDoctors());
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
export const deleteDoctor = createAsyncThunk('doctors/fetchDoctor', async (id) => {
  await axios.delete(`${url}/doctors/${id}`);
});
