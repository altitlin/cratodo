import React from 'react'

export default function({ id, title, done, removeTask, doTask }) {
  return (
    <li className='collection-item'>
      <span className={done ? 'done' : ''}>{title}</span>
      <i className='material-icons' onClick={() => doTask(id)}>check</i>
      <i className='material-icons' onClick={() => removeTask(id)}>close</i>
    </li>
  )
}
