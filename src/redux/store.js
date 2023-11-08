import { configureStore } from '@reduxjs/toolkit';
import doctorReducer from './doctor/doctorSlice';
import reservationsReducer from './reservation/reservationSlice';

const store = configureStore({
  reducer: {
    doctor: doctorReducer,
    reservationsList: reservationsReducer,
  },
});

export default store;
