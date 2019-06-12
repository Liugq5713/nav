import React from 'react'
import './style.css'

export interface LinkProps {
  title: string
  links: Array<{ value: string; label: string; title?: string }>
}

const ArrayLink: React.FC<LinkProps> = props => {
  const links = props.links.map(link => {
    return (
      <li key={link.value}>
        <a
          href={link.value}
          title={link.title}
          target='_blank'
          rel='noopener noreferrer'
        >
          {link.label}
        </a>
      </li>
    )
  })
  const { title } = props
  return (
    <div className='layout'>
      <div className='card'>
        <h2>{title}</h2>
        <ul>{links}</ul>
      </div>
    </div>
  )
}

export default ArrayLink
