import React, { useState } from 'react'
import './style.css'
const DropDown: React.FC = props => {
  const [show, setShow] = useState(true)
  const clickMenu = () => {
    setShow(!show)
  }
  return (
    <div>
      <div className='dd-menu' onClick={clickMenu}>
        <h3>houhu</h3>
        <svg className='icon svg-icon' aria-hidden='true'>
          <use xlinkHref='#el-icon-third-xia' />
        </svg>
      </div>
      <div className='dd-items'>{show ? <div>{props.children}</div> : ''}</div>
    </div>
  )
}

export default DropDown
