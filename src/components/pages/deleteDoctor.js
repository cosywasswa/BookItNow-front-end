import React from 'react';
import DeleteDoc from './deleteDoc';

const DeleteDoctor = () => (
  <div className="flex h-auto gap-3 flex-col flex justify-center mx-auto items-center p-2 mt-20 mb-8 adjust-width">
    <h1 className="font-bold text-xl">Delete Doctor</h1>
    <DeleteDoc />
  </div>
);

export default DeleteDoctor;
