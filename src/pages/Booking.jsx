import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { trains } from '../data/trains';
import WagonSelector from '../components/WagonSelector';
import SeatMap from '../components/SeatMap';
import BookingForm from '../components/BookingForm';

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const train = trains.find((t) => t.id === parseInt(id));

  // Стейт для нашого бронювання
  const [selectedWagon, setSelectedWagon] = useState('Купе');
  const [selectedSeat, setSelectedSeat] = useState(null);

  const handleBooking = (name) => {
    alert(`Дякуємо, ${name}! Квиток на потяг №${train.number} (${selectedWagon}, місце ${selectedSeat}) успішно заброньовано!`);
    navigate('/'); // Повертаємось на головну після бронювання
  };

  if (!train) return <div>Потяг не знайдено!</div>;

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <Link to="/">← Назад до списку</Link>
      <h1>Бронювання: {train.departureCity} - {train.arrivalCity}</h1>
      
      <WagonSelector selectedWagon={selectedWagon} onSelect={setSelectedWagon} />
      <SeatMap selectedSeat={selectedSeat} onSelect={setSelectedSeat} />
      
      {selectedSeat && (
        <BookingForm onBook={handleBooking} />
      )}
    </div>
  );
};

export default Booking;