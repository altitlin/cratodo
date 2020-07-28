import React from 'react'

export default function Header() {
  return (
    <nav className='header'>
      <div className='nav-wrapper py'>
        <a href='/' className='brand-logo'>Learn</a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li><a href='/'>React</a></li>
          <li><a href='/'>Redux</a></li>
          <li><a href='/'>TS</a></li>
        </ul>
      </div>
    </nav>
  )
}
