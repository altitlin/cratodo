import React from 'react'

export default function({ value, onChange, onKeyPress }) {
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
