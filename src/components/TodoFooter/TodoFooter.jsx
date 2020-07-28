import React from 'react'
import PropTypes from 'prop-types'

const BUTTONS = [
  { id: '1', title: 'All' },
  { id: '2', title: 'Active' },
  { id: '3', title: 'Done' },
]

const TodoFooter = ({ countActiveTasks, onClickBtn }) => {
  return (
    <div className='todo__footer'>
      <span>Количество задач {countActiveTasks}</span>
      <div>
        {BUTTONS.map(({ id, title }) => (
          <button key={id} className="waves-effect waves-light btn-small" onClick={() => onClickBtn(title.toLocaleUpperCase())}>
            {title}
          </button>
        ))}
      </div>
    </div>
  )
}

TodoFooter.propTypes = {
  countActiveTasks: PropTypes.number.isRequired,
  onClickBtn: PropTypes.func.isRequired,
}

export default TodoFooter
