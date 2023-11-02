import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { fetchDoctors } from '../../redux/doctor/thunk';
import DoctorCard from './doctorCard';
import SwiperNavButtons from './swiperButtons';
import Loader from '../loader/loader';

const DoctorsList = () => {
  const { doctors, isLoading } = useSelector((store) => store.doctor);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);
  if (isLoading) {
    return <Loader isLoading={isLoading} />;
  }
  return (
    <div className="w-[90%] overflow-x-hidden swiper-container flex justify-center">
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView="auto"
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
          1375: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper"
      >
        {doctors.map((doctor) => (
          <SwiperSlide key={doctor.id} className="px-1">
            <Link to={`/${doctor.id}`} className="flex flex-col items-center p-2 gap-1 w-4/5 mx-auto hover:border hover:shadow-lg my-1">
              <DoctorCard
                name={doctor.name}
                image={doctor.image}
                specialization={doctor.specialization}
                className="hover:text-white"
              />
            </Link>
          </SwiperSlide>
        ))}
        <SwiperNavButtons />
      </Swiper>
    </div>
  );
};

export default DoctorsList;
