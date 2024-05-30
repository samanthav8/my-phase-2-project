import React, {useState, useEffect } from 'react'
import RecordCard from './RecordCard'
import NavBar from './NavBar'

const Records = () => {
  const [records, setRecords ] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/myrecords')
    .then(res => res.json())
    .then(data => setRecords(data))
  })


  return (
    <div>
      <h1>MY RECORD COLLECTION</h1>
    </div>
  )
}

export default Records
