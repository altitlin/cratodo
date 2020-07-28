import React from 'react'
import { NavLink } from 'react-router-dom'

const LINKS = [
  { id: '1', to: '/react', title: 'React' },
  { id: '2', to: '/redux', title: 'Redux' },
  { id: '3', to: '/typescript', title: 'TS' },
]

export default function Header() {
  return (
    <nav className='header'>
      <div className='nav-wrapper py'>
        <NavLink to='/' className='brand-logo'>Learn</NavLink>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          {LINKS.map(({ id, to, title }) => (
            <li key={id}>
              <NavLink to={to}>{title}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
