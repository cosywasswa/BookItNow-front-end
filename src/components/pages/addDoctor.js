import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './doc.css';
import { createDoctor } from '../../redux/doctor/thunk';

const AddDoctor = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState('');
  const [fee, setFee] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && specialization && bio && image && fee) {
      dispatch(createDoctor({
        name,
        specialization,
        bio,
        image,
        fee,
      }));
    }
    setName('');
    setSpecialization('');
    setBio('');
    setFee('');
    setImage('');
  };
  return (
    <main className="add-doctor">
      <div className="title-doc"><h1>ADD A NEW DOCTOR</h1></div>
      <div className="doctor-container">
        <form onSubmit={handleSubmit} className="doctor-form">
          <div className="doc-input-div">

            <div className="doc-name-div">
              <label htmlFor="name" className="doc-name-label">Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="name-input" id="name" placeholder="Full name" />
            </div>

            <div className="special-div">
              <label htmlFor="specialization" className="special-label">Specialization</label>
              <input value={specialization} onChange={(e) => setSpecialization(e.target.value)} type="text" className="special-input" id="specialization" placeholder="Specialization" />
            </div>

            <div className="bio-div">
              <label htmlFor="bio" className="bio-label">Bio</label>
              <input value={bio} onChange={(e) => setBio(e.target.value)} type="text" className="bio-input" id="bio" placeholder="bio" />
            </div>

            <div className="fee-div">
              <label htmlFor="fee" className="fee-label">Fee</label>
              <input value={fee} onChange={(e) => setFee(e.target.value)} type="text" className="fee-input" id="fee" placeholder="fee" />
            </div>

            <div className="image-div">
              <label htmlFor="image" className="photo-label">image</label>
              <input value={image} onChange={(e) => setImage(e.target.value)} type="text" className="image-input" id="image" placeholder="image-url" />
            </div>
          </div>
          <button type="submit" className="doc-add-btn">Add New doctor</button>
        </form>
      </div>
    </main>
  );
};

export default AddDoctor;
