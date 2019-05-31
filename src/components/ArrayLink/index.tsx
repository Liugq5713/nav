import React from 'react'

export interface LinkProps {
  links: Array<{value:string,label:string}>;
}



const Read: React.FC<LinkProps> = (props) => {
  const readLinks =props.links.map(link => {
    return (
      <li key={link.value}>
        <a href={link.value} target='_blank' rel='noopener noreferrer'>
          {link.label}
        </a>
      </li>
    )
  })
  return <ul>{readLinks}</ul>
}

export default Read
