import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from '../../redux/reservation/thunk';
import { useUser } from '../userAccess/userContext';

const MyReservations = () => {
  const dispatch = useDispatch();
  const { user } = useUser();
  let userId = null;
  if (user) {
    userId = user.status.data.id;
  }

  // Get reservations data from Redux store
  const { reservations } = useSelector((store) => store.reservationsList);

  // Fetch reservations when the component mounts
  useEffect(() => {
    console.log('Fetching reservations...'); // Log a message indicating fetching has started
    dispatch(fetchReservations(userId));
  }, [dispatch, userId]);

  console.log('Reservations data:', reservations); // Log the fetched reservations data

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">My Reservations</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border">Id</th>
            <th className="py-2 px-4 border">Date</th>
            <th className="py-2 px-4 border">City</th>
            <th className="py-2 px-4 border">Doctor</th>
            {/* You can add more headers here if needed */}
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => {
            console.log('Reservation ID:', reservation.id); // Log each reservation's ID
            console.log('User ID:', reservation.user_id); // Log each reservation's user ID
            return (
              <tr key={reservation.id} className="bg-white hover:bg-gray-100">
                <td className="py-2 px-4 border">{reservation.id}</td>
                <td className="py-2 px-4 border">{reservation.date}</td>
                <td className="py-2 px-4 border">{reservation.city}</td>
                <td className="py-2 px-4 border">{reservation.doctor.name}</td>
                {/* Add more cells based on reservation properties */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MyReservations;
