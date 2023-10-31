import React, { useEffect } from 'react';
import { FaChevronRight, FaCalendarDay } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { BiLeftArrow } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDoctor } from '../../redux/doctor/thunk';

const DoctorDetails = () => {
  const { doctorInfo } = useSelector((store) => store.doctor);
  const dispatch = useDispatch();
  const { doctorDetails } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchDoctor(doctorDetails));
  }, [dispatch, doctorDetails]);

  return (
    <>

      <div className="w-full p-5 h-1/2  flex flex-col items-center lg:flex-row lg:gap-6  lg:justify-center lg:items-center lg:mt-36 md:mt-36 relative">
        <div className="lg:h-full">
          <img src={doctorInfo.image} alt={doctorInfo.name} className="object-contain h-96" />
        </div>
        <div className="flex flex-col gap-4 w-3/4 mt-4 lg:basis-3/12 lg:self-start">
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
        <button type="button" className="absolute sm:top-0 left-0 p-4 lg:top-full md:top-full  rounded-e-full bg-lime-500" onClick={() => navigate('/doctors')}>
          <BiLeftArrow
            className="ml-2 text-white"
          />
        </button>
      </div>

    </>
  );
};

export default DoctorDetails;
