import React, { useState } from 'react'
import { useOutletContext } from "react-router-dom";
import NavBar from './NavBar'

const RecordForm = () => {
  const [title, setTitle] = useState('');
  const [cover, setCover] = useState('');
  const [artist, setArtist] = useState('');
  const [genre, setGenre] = useState('');

  return (
    <div>
      <h1>NEW RECORD FORM</h1>
      <form>
        <input type="text" value={title} placeholder='Title' />
        <br />
        <input type="text" value={cover} placeholder='Cover Link' />
        <br />
        <input type='text' value={artist} placeholder='Artist Name' />
        <br />
      </form>
    </div>
  )
}

export default RecordForm
