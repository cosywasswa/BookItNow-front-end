import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteDoctor, fetchDoctors } from '../../redux/doctor/thunk';

const DeleteDoctor = () => {
  const { doctors } = useSelector((store) => store.doctor);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);
  const handleDelete = (id) => {
    dispatch(deleteDoctor(id));
  };
  return (
    <div>
      {doctors.map((doctor) => (
        <div key={doctor.id}>
          <h1>{doctor.name}</h1>
          <button type="button" onClick={() => { handleDelete(doctor.id); }}>Delete</button>
        </div>
      ))}

    </div>
  );
};

export default DeleteDoctor;
