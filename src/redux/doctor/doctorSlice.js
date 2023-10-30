import { createSlice } from '@reduxjs/toolkit';
import {
  fetchDoctor, fetchDoctors, createDoctor,
} from './thunk';

const initialState = {
  doctors: [],
  doctorInfo: [],
  isLoading: false,
  error: false,
  errMsg: '',
};

const doctorSlice = createSlice({
  name: 'doctor',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    // fetch doctors
      .addCase(fetchDoctors.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDoctors.fulfilled, (state, action) => {
        state.isLoading = false;
        state.doctors = action.payload;
      })
      .addCase(fetchDoctors.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        state.errMsg = action.payload;
      })
    // fetch doctor
      .addCase(fetchDoctor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDoctor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.doctorInfo = action.payload;
      })
      .addCase(fetchDoctor.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        state.errMsg = action.payload;
      })
    // create doctor
      .addCase(createDoctor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createDoctor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.doctors = action.payload;
      })
      .addCase(createDoctor.rejected, (state, action) => {
        state.isLoading = false;
        state.errors = true;
        state.errMsg = action.payload;
      });
  },
});
export default doctorSlice.reducer;
