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

const DoctorsList = () => {
  const { doctors } = useSelector((store) => store.doctor);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  return (
    <div className="w-[80%] mx-auto overflow-x-hidden">
      <Swiper
        modules={[Navigation]}
        spaceBetween={2}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper"
      >
        {doctors.map((doctor) => (
          <SwiperSlide key={doctor.id}>
            <Link to={`/${doctor.id}`} className="flex flex-col items-center gap-1 w-4/5 mx-auto">
              <DoctorCard
                name={doctor.name}
                image={doctor.image}
                specialization={doctor.specialization}
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
