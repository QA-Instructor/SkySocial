import React from 'react'
import eventData from '../resources/skySocial.json'
export const MyEvents = () => {
  return (
    <div className='myEvents-container'>
        <h1>MyEvents</h1>
        <p>{eventData.events[1].eventTitle}</p>
    </div>
  )
}

export default MyEvents