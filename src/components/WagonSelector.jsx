import React from 'react';

const WagonSelector = ({ selectedWagon, onSelect }) => {
  const wagons = ['Купе', 'Плацкарт', 'Люкс'];

  return (
    <div style={{ marginBottom: '20px' }}>
      <h4>Оберіть тип вагона:</h4>
      {wagons.map((wagon) => (
        <button
          key={wagon}
          onClick={() => onSelect(wagon)}
          style={{
            marginRight: '10px',
            padding: '10px 20px',
            backgroundColor: selectedWagon === wagon ? '#0056b3' : '#f0f0f0',
            color: selectedWagon === wagon ? '#fff' : '#000',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          {wagon}
        </button>
      ))}
    </div>
  );
};

export default WagonSelector;