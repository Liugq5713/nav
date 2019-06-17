import React ,{ReactNode}from 'react'
import './style.css'
interface SearchFunc {
  (source: string, subString: string): boolean;
}
export interface PropType {
  cateogries: Array<string>
  children?: ReactNode 
  setCategory: SearchFunc;
}

const SideBar: React.FC<PropType>= props => {
  console.log('props', props)
  const {cateogries} =props
  const cateogry_list = cateogries.map(item=>{
    return (
      <li onClick={(item)=>props.setCategory(item)} key={item}>
        {item}
      </li>
    )
  })
  return (
    <div className='sidebar'>
      <div className='header'>{props.children}</div>
      <div className='content'>
        <ul>
          {cateogry_list}
        </ul>
      </div>
    </div>
  )
}
export default SideBar
