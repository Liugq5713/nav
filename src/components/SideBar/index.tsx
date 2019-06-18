import React, { ReactNode } from 'react'
import './style.css'
interface SearchFunc {
  (source: string): void
}
export interface PropType {
  cateogries: Array<string>
  children?: ReactNode
  setCategory: SearchFunc
}

const SideBar: React.FC<PropType> = props => {
  console.log('props', props)
  const { cateogries } = props
  const cateogry_list = cateogries.map(item => {
    return (
      <li
        className='pure-menu-item'
        value={item}
        onClick={() => props.setCategory(item)}
        key={item}
      >
        <a href={`#${item}`}  className="pure-menu-link ">
          <span className='color-white'>
              {item}
          </span>
        </a>
      </li>
    )
  })
  return (
    <div className='sidebar'>
      <div className='header'>{props.children}</div>
      <div className='content'>
        <ul className='pure-menu-list'>{cateogry_list}</ul>
      </div>
    </div>
  )
}
export default SideBar
