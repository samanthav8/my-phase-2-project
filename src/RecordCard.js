import React from 'react'
import { Link } from 'react-router-dom'

const RecordCard = ({record}) => {
  return (
    <div>
      <article>
        <img src={record.cover} alt={record.name} />
        <h1>{record.name}</h1>
        <p>{record.artist}</p>
        <p>{record.genre}</p>
        <Link to="/record">More Info</Link>
      </article>
    </div>
  )
}

export default RecordCard
