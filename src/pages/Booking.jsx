import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { trains } from '../data/trains';
import WagonSelector from '../components/WagonSelector';
import SeatMap from '../components/SeatMap';
import BookingForm from '../components/BookingForm';
import { saveBooking } from '../services/storage';

// 1. Конфігурацію виносимо ЗА МЕЖІ компонента
const WAGON_CONFIG = {
  'Люкс': 10,
  'Купе': 36,
  'Плацкарт': 54
};

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // 2. УСІ ХУКИ МАЮТЬ БУТИ ТУТ, НА ПОЧАТКУ
  const [selectedWagon, setSelectedWagon] = useState('Купе');
  const [selectedSeat, setSelectedSeat] = useState(null);

  const train = trains.find((t) => t.id === parseInt(id));
  
  // Обчислюємо кількість місць на основі вибору вагона
  const capacity = WAGON_CONFIG[selectedWagon];

  const handleBooking = (name) => {
    const newBooking = {
      trainNumber: train.number,
      route: `${train.departureCity} - ${train.arrivalCity}`,
      wagon: selectedWagon,
      seat: selectedSeat,
      passenger: name,
      date: new Date().toLocaleString()
    };

    saveBooking(newBooking);
    
    alert(`Дякуємо, ${name}! Квиток на потяг №${train.number} (${selectedWagon}, місце ${selectedSeat}) успішно заброньовано!`);
    navigate('/'); 
  };

  // 3. Перевірка на наявність потяга (тільки після хуків!)
  if (!train) return <div>Потяг не знайдено!</div>;

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <Link to="/">← Назад до списку</Link>
      <h1>Бронювання: {train.departureCity} - {train.arrivalCity}</h1>
      
      <WagonSelector selectedWagon={selectedWagon} onSelect={setSelectedWagon} />
      
      {/* 4. Передаємо capacity в SeatMap */}
      <SeatMap 
        selectedSeat={selectedSeat} 
        onSelect={setSelectedSeat} 
        capacity={capacity} 
      />
      
      {selectedSeat && (
        <BookingForm onBook={handleBooking} />
      )}
    </div>
  );
};

export default Booking;