import React from 'react';

const SeatMap = ({ selectedSeat, onSelect, capacity }) => {
  // Генеруємо масив місць на основі отриманої ємності (capacity)
  const seats = Array.from({ length: capacity }, (_, i) => i + 1);

  return (
    <div style={{ marginTop: '20px' }}>
      <h4>Оберіть місце:</h4>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(5, 1fr)', 
        gap: '10px', 
        maxWidth: '300px' 
      }}>
        {seats.map((seat) => (
          <button
            key={seat}
            onClick={() => onSelect(seat)}
            style={{
              padding: '10px',
              backgroundColor: selectedSeat === seat ? '#28a745' : '#e0e0e0',
              color: selectedSeat === seat ? '#fff' : '#000',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            {seat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SeatMap;