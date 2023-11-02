import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaTrashCan } from 'react-icons/fa6';
import { deleteDoctor, fetchDoctors } from '../../redux/doctor/thunk';
import Loader from '../loader/loader';

const DeleteDoctor = () => {
  const { doctors, isLoading } = useSelector((store) => store.doctor);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);
  const handleDelete = (id) => {
    dispatch(deleteDoctor(id));
  };
  if (isLoading) {
    return <div className="mx-auto"><Loader isLoading={isLoading} /></div>;
  }
  return (

    <div className="flex h-auto gap-2 flex-col flex justify-center mx-auto items-center p-2 mt-25 adjust-width">
      <h1 className="font-bold text-xl">Delete Doctor</h1>
      {doctors.map((doctor) => (
        <div key={doctor.id} className="flex w-96 h-30 md:w-3/6 lg:w-2/4 lg:gap-5 border-2 rounded-md gap-2 hover:shadow-lg">
          <img src={doctor.image} alt={doctor.name} className=" w-40  lg:w-52 h-auto image-doctor" />
          <div className="grid items-start">
            <div>
              <p className="lg:text-lg font-bold ">{doctor.name}</p>
              <p style={{ color: '#c0c2c1' }} className="text-base">{doctor.specialization}</p>
            </div>
            <button type="button" className="self-end mb-1 place-self-center justify-self-start border border-red-600 bg-red-600 text-white hover:text-black transition ease-in-out delay-150 bg-red-600  hover:bg-white duration-300  flex items-center p-2 gap-2 rounded-md" onClick={() => { handleDelete(doctor.id); }}>
              <FaTrashCan />
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DeleteDoctor;
