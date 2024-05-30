import React from 'react'
import { Link } from 'react-router-dom'

const RecordCard = ({record}) => {
  return (
    <div>
      <article>
        <h2>record name</h2>
        <Link to="/record">More Info</Link>
      </article>
    </div>
  )
}

export default RecordCard
