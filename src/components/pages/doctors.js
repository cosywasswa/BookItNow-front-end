import React from 'react';
import DoctorsList from '../doctor/doctorlist';

const Doctors = () => (
  <div className="flex flex-col w-11/12 items-center mx-auto gap-14 md:mt-32 lg:mt-32 lg: h-auto overflow-x-hidden">
    <div>
      <h1 className="text-3xl">Doctors List</h1>
      <p className="text-gray-400 mt-2">Please Select a Doctor</p>
    </div>
    <DoctorsList />
  </div>
);

export default Doctors;
