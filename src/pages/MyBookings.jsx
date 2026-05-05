import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getBookings } from '../services/storage';

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    setBookings(getBookings());
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <Link to="/">← На головну</Link>
      <h1>Мої квитки</h1>
      {bookings.length === 0 ? (
        <p>Ви ще нічого не забронювали.</p>
      ) : (
        <div style={{ display: 'grid', gap: '15px' }}>
          {bookings.map((b, index) => (
            <div key={index} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
              <h3>Потяг №{b.trainNumber}</h3>
              <p>Маршрут: {b.route}</p>
              <p>Вагон: {b.wagon} | Місце: {b.seat}</p>
              <p>Пасажир: {b.passenger}</p>
              <small>Заброньовано: {b.date}</small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;