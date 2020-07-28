import React from 'react'

export default function({ onChange, onKeyPress, value }) {
  return (
    <input
      type='text'
      className='input-field'
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      placeholder='Введите название задачи'
    />
  )
}
