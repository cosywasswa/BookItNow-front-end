import React from 'react';
import DoctorsList from '../doctor/doctorlist';

const Doctors = () => (
  <div className="flex flex-col justify-center lg:h-full">
    <div>
      <h1 className="text-center text-3xl">Doctors List</h1>
      <p className="text-center text-gray-400">Please Select a Doctor</p>
    </div>
    <DoctorsList />
  </div>
);

export default Doctors;
