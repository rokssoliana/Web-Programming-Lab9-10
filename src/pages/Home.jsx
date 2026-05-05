import React from 'react';
import { Link } from 'react-router-dom';
import TrainList from '../components/TrainList';

const Home = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Розклад потягів</h1>
      
      {/* Посилання на сторінку з твоїми бронюваннями */}
      <Link to="/my-bookings" style={{ 
        display: 'inline-block', 
        marginBottom: '20px', 
        padding: '10px 15px', 
        backgroundColor: '#0056b3', 
        color: '#fff', 
        textDecoration: 'none', 
        borderRadius: '5px' 
      }}>
        📦 Переглянути мої квитки
      </Link>

      <TrainList />
    </div>
  );
};

export default Home;