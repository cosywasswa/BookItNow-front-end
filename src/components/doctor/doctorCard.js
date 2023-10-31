import React from 'react';
import PropTypes from 'prop-types';
import SocialIcons from './socialIcons';

const DoctorCard = ({
  name, image, specialization,
}) => (
  <>
    <div className="doctor-image">
      <img src={image} alt={name} className="rounded-full image-doctor w-72 h-72 border-2" />
    </div>
    <p className="text-center">{name}</p>
    <p style={{ color: '#c0c2c1' }} className="text-center">{specialization}</p>
    <SocialIcons />
  </>
);

DoctorCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  specialization: PropTypes.string,
};
DoctorCard.defaultProps = {
  name: null,
  image: null,
  specialization: null,
};

export default DoctorCard;
