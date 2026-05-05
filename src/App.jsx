import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import MyBookings from './pages/MyBookings'; // 1. Імпортуємо нову сторінку

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/my-bookings" element={<MyBookings />} /> {/* 2. Додаємо шлях */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;