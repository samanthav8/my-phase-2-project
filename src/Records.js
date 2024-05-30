import React, { useState, useEffect } from 'react';
import RecordCard from './RecordCard';

const Records = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/myrecords')
      .then(res => res.json())
      .then(data => setRecords(data));
  }, [])

  return (
    <div>
      <h1>MY RECORD COLLECTION</h1>
      <div>
        {records.length > 0 ? 
          (records.map(record => (<RecordCard key={record.id} record={record} />))) : (<p>Your Record Collection is empty! Click add a new record to start your collection!</p>)}
      </div>
    </div>
  );
};

export default Records;
