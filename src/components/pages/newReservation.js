import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createReservation } from '../../redux/reservation/thunk';
import { useUser } from '../userAccess/userContext';

const NewReservation = () => {
  const dispatch = useDispatch();
  const user = useUser();
  const userId = user?.status?.data?.id; // Safely access the user ID

  // Local state variables for form inputs, loading state, and error handling
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [doctorId, setDoctorId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Log the reservation data before dispatching the action
    console.log('Reservation Data:', {
      userId,
      doctorId,
      city,
      date,
    });

    try {
      const reservationData = {
        userId: user?.status?.data?.id,
        doctorId,
        city,
        date,
      };

      // Dispatch asynchronous action using Redux Thunk to create reservation
      await dispatch(createReservation({ data: reservationData }));

      // Log success and handle further actions (e.g., redirect user)
      console.log('Reservation created successfully!');

      // Clear form inputs after successful submission
      setDoctorId('');
      setCity('');
      setDate('');
    } catch (error) {
      // Handle errors (e.g., show error message to the user)
      console.error('Error creating reservation:', error);
      setError('Error creating reservation. Please try again later.');
    } finally {
      // Reset loading state regardless of success or failure
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">New Reservation</h2>
      <form onSubmit={handleSubmit}>
        {/* Date input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>
        {/* City input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">City</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>
        {/* Doctor ID input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Doctor ID</label>
          <input
            type="text"
            value={doctorId}
            onChange={(e) => setDoctorId(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>
        {/* Error message */}
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {/* Submit button */}
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
