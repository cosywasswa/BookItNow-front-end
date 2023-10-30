import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://127.0.0.1:4000/api/v1';

export const fetchDoctors = createAsyncThunk('doctors/fetchDoctors', async (thunkAPI) => {
  try {
    const response = await axios.get(`${url}/doctors`);
    console.log(response.data, 'now');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const fetchDoctor = createAsyncThunk('doctors/fetchDoctor', async (id, thunkAPI) => {
  try {
    const response = await axios.get(`${url}/doctors/${id}`);
    console.log(response.data, 'doctor details');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const createDoctor = createAsyncThunk('doctors/createDoctor', async ({ data }, thunkAPI) => {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
