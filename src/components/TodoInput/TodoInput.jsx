import React from 'react'
import PropTypes from 'prop-types'

const TodoInput = ({ value, onChange, onKeyPress }) => {
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

TodoInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isRequired,
}

export default TodoInput
