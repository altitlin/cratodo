import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'

class Alert extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    showToast: PropTypes.bool.isRequired,
  }

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

export default Alert
