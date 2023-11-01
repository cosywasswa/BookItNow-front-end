import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createReservation } from '../../redux/reservation/thunk';
import { useUser } from '../userAccess/userContext';

const NewReservation = () => {
  const dispatch = useDispatch();
  const user = useUser();
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if user is defined and has the required properties
    if (!user?.status?.data?.id || !date || !city) {
      // Optionally, handle the case where required fields are missing
      return;
    }

    // Dispatch the createReservation thunk action with reservation data
    await dispatch(createReservation({
      data: {
        userId: user.status.data.id,
        date,
        city,
      },
    }));

    // Clear form fields after successful submission
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
        {/* You can add more fields here if needed */}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Reserve
        </button>
      </form>
    </div>
  );
};

export default NewReservation;
