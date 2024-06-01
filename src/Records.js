import React from 'react';
import { useOutletContext } from "react-router-dom";
import RecordCard from './RecordCard';

const Records = () => {
  const {records} = useOutletContext();
  return (
    <div>
      <h1>MY RECORD COLLECTION</h1>
      <div className='record-container'>
        {records.length > 0 ? 
          (records.map(record => (<RecordCard key={record.id} record={record} />))) : (<p>Your Record Collection is empty! Click add a new record to start your collection!</p>)}
      </div>
    </div>
  );
};

export default Records;
