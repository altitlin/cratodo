import React from 'react'

export default function() {
  return (
    <div className='todo__footer'>
      <span>Количество задач</span>
      <div>
        <button className="waves-effect waves-light btn-small">All</button>
        <button className="waves-effect waves-light btn-small">Active</button>
        <button className="waves-effect waves-light btn-small">Done</button>
      </div>
    </div>
  )
}
