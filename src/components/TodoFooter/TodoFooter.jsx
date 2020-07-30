import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { changeActiveFilter } from '../../redux/actions/filterActions'

const BUTTONS = [
  { id: '1', title: 'All' },
  { id: '2', title: 'Active' },
  { id: '3', title: 'Done' },
]

const TodoFooter = ({ countActiveTasks }) => {
  const dispatch = useDispatch()

  const onClickBtn = title => {
    dispatch(changeActiveFilter(title.toLocaleUpperCase()))
  }

  return (
    <div className='todo__footer'>
      <span>Количество задач {countActiveTasks}</span>
      <div>
        {BUTTONS.map(({ id, title }) => (
          <button key={id} className="waves-effect waves-light btn-small" onClick={() => onClickBtn(title)}>
            {title}
          </button>
        ))}
      </div>
    </div>
  )
}

TodoFooter.propTypes = {
  countActiveTasks: PropTypes.number.isRequired,
}

export default TodoFooter
