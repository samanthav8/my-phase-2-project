import React from 'react';
import { useParams, useOutletContext } from 'react-router-dom';

const RecordInfo = () => {
  const { id } = useParams();
  const records = useOutletContext();

  const record = records.find(record => record.id === id); 

  if (!record) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>{record.title}</h1>
      <p>Artist: {record.artist}</p>
      <p>Genre: {record.genre}</p>
      <img src={record.cover} alt={record.name} />
    </div>
  );
};

export default RecordInfo;
