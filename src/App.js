import './styles/App.css'
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

function App() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch('http://localhost:30001/myrecords')
      .then(res => res.json())
      .then(data => setRecords(data));
  }, [])

  const addRecord = (newRecord) => {
    setRecords([...records, newRecord]);
  };

  return (
    <div className="App">
      <NavBar />
      <Outlet context={{addRecord, records}}/>
    </div>
  );
}

export default App;
