import React from 'react'

const Movies = (props) => {
  return (
    <div className="movie">
        <img src={props.Img} alt="movie poster" />
        <p className='title'>Title: {props.Title}</p>
        <p>Year: {props.Year}</p>
    </div>
  )
}

export default Movies
