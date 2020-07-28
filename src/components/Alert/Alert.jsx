import React, { Component } from 'react'
import { createPortal } from 'react-dom'

export default class extends Component {
  componentWillUnmount() {
    if (document.querySelector('.toast')) {
      document.querySelector('.toast').remove()
    }
  }

  render() {
    const { text, showToast } = this.props

    return createPortal(
      showToast && <div className='toast z-depth-1'>
        <span className='toast__text'>{text}</span>
      </div>,
      document.getElementById('root')
    )
  }
}
