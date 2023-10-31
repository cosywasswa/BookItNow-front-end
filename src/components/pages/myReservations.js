import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from '../../redux/reservation/thunk';

const MyReservations = () => {
  const dispatch = useDispatch();
  const userId = 1;

  const { reservations } = useSelector((store) => store.reservationsList);
  useEffect(() => {
    // Fetch reservations when the component mounts
    dispatch(fetchReservations(userId));
  }, [dispatch, userId]);
  return (
    <div>
      <h2>My Reservations</h2>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.id}>
            <div>
              Item Name:
              {reservation.itemName}
            </div>
            <div>
              Date:
              {reservation.date}
            </div>
            <div>
              City:
              {reservation.city}
            </div>
            {/* You can add more reservation details here */}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MyReservations;
