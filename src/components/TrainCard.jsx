import React from 'react';
import { Link } from 'react-router-dom'; // 1. Додали імпорт

const TrainCard = ({ train }) => {
  const cardStyle = {
    border: 'none',
    padding: '20px',
    margin: '15px',
    borderRadius: '12px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    cursor: 'pointer'
  };

  return (
    <div style={cardStyle}>
      <h3 style={{ margin: '0 0 10px 0', color: '#0056b3' }}>Потяг №{train.number}</h3>
      <p style={{ margin: '5px 0' }}><strong>Маршрут:</strong> {train.departureCity} - {train.arrivalCity}</p>
      <p style={{ margin: '5px 0' }}><strong>Відправлення:</strong> {new Date(train.departureTime).toLocaleString()}</p>
      <p style={{ margin: '5px 0', fontWeight: 'bold', color: '#28a745' }}>Ціна: {train.price} грн</p>
      
      {/* 2. Додали кнопку, що веде на сторінку бронювання */}
      <Link to={`/booking/${train.id}`}>
        <button style={{ marginTop: '15px', padding: '10px 15px', cursor: 'pointer' }}>
          Забронювати
        </button>
      </Link>
    </div>
  );
};

export default TrainCard;