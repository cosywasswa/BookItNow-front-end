import React from 'react';
import PropTypes from 'prop-types';
import SocialIcons from './socialIcons';

const DoctorCard = ({
  id, name, image, specialization,
}) => (
  <div id={id} className="flex flex-col items-center gap-1">
    <div className="doctor-image">
      <img src={image} alt={name} className="rounded-full image-doctor w-80 h-80 mx-auto border-2" />
    </div>
    <p className="text-center">{name}</p>
    <p style={{ color: '#c0c2c1' }} className="text-center">{specialization}</p>
    <SocialIcons />
  </div>
);

DoctorCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  specialization: PropTypes.string,
  id: PropTypes.string,
};
DoctorCard.defaultProps = {
  name: null,
  image: null,
  specialization: null,
  id: null,
};

export default DoctorCard;
