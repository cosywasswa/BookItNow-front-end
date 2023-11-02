import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { createReservation } from '../../redux/reservation/thunk';
import { useUser } from '../userAccess/userContext';
import { fetchDoctors } from '../../redux/doctor/thunk';

const NewReservation = () => {
  const dispatch = useDispatch();
  const { doctors } = useSelector((store) => store.doctor);
  const location = useLocation();
  const selectedDoctor = location.state;
  const { user } = useUser();
  const userId = user?.status?.data?.id;

  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [doctorId, setDoctorId] = useState(selectedDoctor ? selectedDoctor.id : '');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (!userId) {
        throw new Error('User ID is not available. Please login and try again.');
      }

      const reservationData = {
        user_id: userId,
        doctor_id: doctorId,
        city,
        date,
      };

      await dispatch(createReservation({ data: reservationData }));
      console.log('Reservation created successfully!');
      setDoctorId('');
      setCity('');
      setDate('');
    } catch (error) {
      console.error('Error creating reservation:', error.message);
      setError('Error creating reservation. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  return (
    <div className="container mx-auto mt-8 p-8 border rounded shadow-lg flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">New Reservation</h2>
      <form onSubmit={handleSubmit} className="flex items-center space-x-4">
        <label htmlFor="date" className="text-sm font-medium text-gray-600">
          Date
        </label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <label htmlFor="city" className="text-sm font-medium text-gray-600">
          City
        </label>
        <input
          id="city"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <label htmlFor="doctor" className="text-sm font-medium text-gray-600">
          Choose Doctor
        </label>
        <select
          id="doctor"
          onChange={(e) => setDoctorId(e.target.value)}
          value={doctorId}
          className="p-2 border rounded bg-white"
          required
        >
          <option value="">Select a Doctor</option>
          {doctors.map((doctor) => (
            <option key={doctor.id} value={doctor.id}>
              {doctor.name}
            </option>
          ))}
        </select>
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ${
            isLoading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={isLoading}
        >
          {isLoading ? 'Reserving...' : 'Reserve'}
        </button>
      </form>
    </div>
  );
};

export default NewReservation;
