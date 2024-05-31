import './styles/App.css'
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

function App() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/myrecords')
      .then(res => res.json())
      .then(data => setRecords(data));
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Outlet context={records}/>
    </div>
  );
}

export default App;
