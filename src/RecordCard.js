import React from 'react';
import { Link } from 'react-router-dom';

const RecordCard = ({ record }) => {
  console.log(record)
  return (
    <div>
      <img src={record.cover} alt={record.title} />
      <h1>{record.title}</h1>
      <p>{record.artist}</p>
      <p>{record.genre}</p>
    </div>
  );
};

export default RecordCard;
