import React from 'react';
import { Link } from 'react-router-dom';

const RecordCard = ({ record }) => {
  console.log('RecordCard record:', record); // Add this for debugging

  return (
    <div>
      <img src={record.cover} alt={record.name} />
      <h1>{record.name}</h1>
      <p>{record.artist}</p>
      <p>{record.genre}</p>
      <Link to={`/records/${record.id}`}>View Details</Link>
    </div>
  );
};

export default RecordCard;
