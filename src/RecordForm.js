import React, { useState } from 'react'
import { useOutletContext } from "react-router-dom";
import NavBar from './NavBar'

const RecordForm = () => {
  const [title, setTitle] = useState('');
  const [cover, setCover] = useState('');
  const [artist, setArtist] = useState('');
  const [genre, setGenre] = useState('');
  const { addRecord } = useOutletContext();

  function handleTitleChange(e){
    setTitle(e.target.value)
  }

  function handleCoverChange(e){
    setCover(e.target.value)
  }

  function handleArtistChange(e){
    setArtist(e.target.value)
  }

  function handleGenreChange(e){
    setGenre(e.target.value)
  }


  function handleSubmit(e) {
    e.preventDefault();
    const newRecord = { title, cover, artist, genre}
    fetch("http://localhost:3001/myrecords", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecord),
    })
    .then((r) => r.json())
    .then((newRecord) => addRecord(newRecord))
  }
  return (
    <div>
      <h1>NEW RECORD FORM</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} placeholder='Title'  onChange={handleTitleChange}/>
        <br />
        <input type="text" value={cover} placeholder='Cover Link' onChange={handleCoverChange}/>
        <br />
        <input type='text' value={artist} placeholder='Artist Name' onChange={handleArtistChange}/>
        <br />
        <input type='text' value={genre} placeholder='Genre' onChange={handleGenreChange}/>
        <br />
        <button type="submit">Add Record</button>
      </form>
    </div>
  )
}

export default RecordForm
