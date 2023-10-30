import React, { useEffect } from 'react';
import { FaChevronRight, FaCalendarDay } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchDoctor } from '../../redux/doctor/thunk';

const DoctorDetails = () => {
  const { doctorInfo } = useSelector((store) => store.doctor);
  const dispatch = useDispatch();
  const { doctorDetails } = useParams();
  useEffect(() => {
    dispatch(fetchDoctor(doctorDetails));
  }, [dispatch, doctorDetails]);

  return (
    <>

      <div className="w-10/12 h-1/2 h-screen m-auto lg:flex lg:gap-2 lg:justify-center lg:mt-11">
        <div className="basis-2/5">
          <img src={doctorInfo.image} alt={doctorInfo.name} className="w-full object-contain h-96 lg:h-3/5" />
        </div>
        <div className="flex flex-col gap-4 mt-4 lg:basis-1/4">
          <p className="text-2xl text-center">{doctorInfo.name}</p>
          <p className="text-center">
            <span className="mr-1 text-bold">specialization:</span>
            <span>{doctorInfo.specialization}</span>

          </p>
          <p className="flex justify-between bg-gray-200 p-2">
            <span>Doctor &apos;s fee:</span>
            <span>
              $
              {doctorInfo.fee}
            </span>
          </p>
          <div>
            <p>Bio:</p>
            <p className="">{doctorInfo.bio}</p>
          </div>
          <button
            type="button"
            className="border-2  bg-lime-500
 text-white border-lime-500 flex items-center gap-2 p-3 rounded-full self-center lg:hover:bg-white  lg:hover:text-lime-500"
          >
            <FaCalendarDay />
            <span>
              <span>Reserve</span>
              <span className="ml-1">Appointment</span>
            </span>
            <span className="font-light border border-white rounded-full p-1 ml-1"><FaChevronRight /></span>
          </button>
        </div>

      </div>

    </>
  );
};

export default DoctorDetails;
