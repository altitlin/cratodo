import React from 'react'

import { AppContext } from '../../../context'

const BUTTONS = [
  { id: '1', title: 'All' },
  { id: '2', title: 'Active' },
  { id: '3', title: 'Done' },
]

export default function() {
  return (
    <AppContext.Consumer>
      {({ countDoneTasks, onClickBtn }) => (
        <div className='todo__footer'>
          <span>Количество задач {countDoneTasks}</span>
          <div>
            {BUTTONS.map(({ id, title }) => (
              <button key={id} className="waves-effect waves-light btn-small" onClick={onClickBtn}>
                {title}
              </button>
            ))}
          </div>
        </div>
      )}
    </AppContext.Consumer>
  )
}
