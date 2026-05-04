import React from 'react';

const TrainCard = ({ train }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px', borderRadius: '8px' }}>
      <h3>Потяг №{train.number}</h3>
      <p><strong>Маршрут:</strong> {train.departureCity} - {train.arrivalCity}</p>
      <p><strong>Відправлення:</strong> {new Date(train.departureTime).toLocaleString()}</p>
      <p><strong>Ціна:</strong> {train.price} грн</p>
    </div>
  );
};

export default TrainCard;