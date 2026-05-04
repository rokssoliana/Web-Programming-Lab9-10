import React from 'react';
import { trains } from '../data/trains';
import TrainCard from './TrainCard';

const TrainList = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Розклад потягів</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {trains.map((train) => (
          <TrainCard key={train.id} train={train} />
        ))}
      </div>
    </div>
  );
};

export default TrainList;