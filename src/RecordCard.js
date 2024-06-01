import React from 'react';
import { Link } from 'react-router-dom';

const RecordCard = ({ record }) => {
  console.log('RecordCard record:', record); // Add this for debugging

  return (
    <div className='record-card'>
      <img src={record.cover} alt={record.name} />
      <h1>{record.title}</h1>
      <Link to={`/records/${record.id}`}>View Details</Link>
    </div>
  );
};

export default RecordCard;
