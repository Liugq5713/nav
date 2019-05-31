import React from 'react'
import { Readlinks } from './link'

const Read: React.FC = () => {
  const readLinks = Readlinks.map(link => {
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
