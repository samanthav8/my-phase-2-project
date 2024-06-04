import React from 'react';
import { useParams, useOutletContext } from 'react-router-dom';

const RecordInfo = () => {
  const { id } = useParams();
  const records = useOutletContext();

  const record = records.find(record => record.id === id); 


  return (
    <div className="record-info-container">
      <h1>{record.title}</h1>
      <img src={record.cover} alt={record.name} />
      <p>Artist: {record.artist}</p>
      <p>Genre: {record.genre}</p>
    </div>
  );
};

export default RecordInfo;
