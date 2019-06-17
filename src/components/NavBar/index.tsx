import React from 'react'
import './style.css'
const NavBar: React.FC = props => {
  return (
    <div className='sidebar'>
      <div className='header'>{props.children}</div>
    </div>
  )
}
export default NavBar
