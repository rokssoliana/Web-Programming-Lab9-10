import React, { useState } from 'react';

const BookingForm = ({ onBook }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onBook(name);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
      <h4>Інформація про пасажира:</h4>
      <input
        type="text"
        placeholder="Ваше ім'я та прізвище"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{ padding: '10px', width: '250px', marginBottom: '10px', display: 'block' }}
      />
      <button 
        type="submit" 
        style={{ padding: '10px 20px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Забронювати
      </button>
    </form>
  );
};

export default BookingForm;