import React, { ReactNode } from 'react'
// import dinodr from './dinodr.gif'
import './style.css'
interface SearchFunc {
  (source: string): void
}
export interface PropType {
  cateogries: Array<string>
  children?: ReactNode
}

const SideBar: React.FC<PropType> = props => {
  console.log('props', props)
  const { cateogries } = props
  const cateogry_list = cateogries.map(item => {
    return (
      <li className='pure-menu-item' value={item} key={item}>
        <a href={`#${item}`} className='pure-menu-link '>
          <span className='color-white'>{item}</span>
        </a>
      </li>
    )
  })
  return (
    <div className='sidebar'>
      {/* <div className='logo'>
        <img width='50%' src={dinodr} alt='logo' />
      </div> */}
      <div className='header'>{props.children}</div>
      <div className='content'>
        <ul className='pure-menu-list'>{cateogry_list}</ul>
      </div>
    </div>
  )
}
export default SideBar
