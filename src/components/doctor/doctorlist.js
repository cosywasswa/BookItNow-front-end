import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDoctors } from '../../redux/doctor/thunk';
import DoctorCard from './doctorCard';

const DoctorsList = () => {
  const { doctors } = useSelector((store) => store.doctor);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  return (
    <>
      <div className="grid md:grid-cols-3 lg:grid-cols-3 ">
        {doctors.map((doctor) => (
          <Link to={`/${doctor.id}`} key={doctor.id} className="border-2">
            <DoctorCard
              name={doctor.name}
              image={doctor.image}
              specialization={doctor.specialization}
            />
          </Link>
        ))}
      </div>
    </>

  );
};

export default DoctorsList;
