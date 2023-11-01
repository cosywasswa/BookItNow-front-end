import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createReservation } from '../../redux/reservation/thunk';
import { useUser } from '../userAccess/userContext';

const NewReservation = () => {
  const dispatch = useDispatch();
  const user = useUser();
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Retrieve user ID from local storage when component mounts
  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      // Set user ID in the context if available in local storage
      user.setUser({ id: storedUserId });
    }
  }, []); // Empty dependency array ensures this effect runs once after the initial render

  // Set user ID as default value in the form
  useEffect(() => {
    if (user?.status?.data?.id) {
      setDate(new Date().toISOString().split('T')[0]); // Autofill current date
      setCity(user.status.data.city || ''); // Autofill city if available in user data
    }
  }, [user?.status?.data?.id]); // Dependency ensures this effect runs whenever user ID changes

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validating form inputs
    if (!user || !date || !city) {
      setError('Please select a date and city.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Constructing reservation data object with user ID from context
      const reservationData = {
        userId: user?.status?.data?.id,
        date,
        city,
      };

      // Dispatching createReservation action with reservationData
      await dispatch(createReservation({ data: reservationData }));
      console.log('Reservation created successfully!');
      // Optionally, you can redirect the user to a success page or show a success message.
    } catch (error) {
      console.error('Error creating reservation:', error);
      setError('Error creating reservation. Please try again later.');
    } finally {
      setIsLoading(false);
    }

    // Clearing form inputs
    setDate('');
    setCity('');
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">New Reservation</h2>
      <form onSubmit={handleSubmit}>
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
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          type="submit"
          className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isLoading}
        >
          {isLoading ? 'Reserving...' : 'Reserve'}
        </button>
      </form>
    </div>
  );
};

export default NewReservation;
