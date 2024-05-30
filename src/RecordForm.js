import React, { useState } from 'react'
import NavBar from './NavBar'

const RecordForm = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  
  return (
    <div>
      <h1>NEW RECORD FORM</h1>
    </div>
  )
}

export default RecordForm
