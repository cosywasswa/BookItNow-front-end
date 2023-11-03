import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigation } from 'react-router';
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
  const navigate = useNavigation();

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
      setDoctorId('');
      setCity('');
      setDate('');
      navigate('/My-reservation');
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
    <div className="container mx-auto mt-8 p-8 border rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">New Reservation</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
        <div className="flex flex-col w-full md:w-1/2">
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
        </div>

        <div className="flex flex-col w-full md:w-1/2">
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
        </div>

        <div className="flex flex-col w-full md:w-1/2">
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
        </div>

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

      <div className="bg-gray-100 text-center p-8 mt-4">
        <h2 className="text-2xl font-bold mb-4">Doctor&apos;s Work Hours and Booking Information</h2>
        <p className="text-gray-700">
          Our doctors are available from Monday to Friday,
          9:00 AM to 5:00 PM. To book an appointment,
          please fill out the form above with the required details
          and click the &quot;Reserve&quot; button.
          If you have any questions,
          feel free to contact our support team at support@example.com.
        </p>
      </div>
    </div>
  );
};

export default NewReservation;
