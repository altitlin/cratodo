import React from 'react'

import { AppContext } from '../../../context'

export default function() {
  return (
    <AppContext.Consumer>
      {({ value, onChange, onKeyPress }) => (
        <input
          type='text'
          className='input-field'
          value={value}
          onChange={onChange}
          onKeyPress={onKeyPress}
          placeholder='Введите название задачи'
        />
      )}
    </AppContext.Consumer>
  )
}
