import React from 'react'
import { TutorialLinks } from './link'

const Tutorial: React.FC = () => {
  const links = TutorialLinks.map(link => {
    return (
      <li key={link.value}>
        <a href={link.value} target='_blank'>
          {link.label}
        </a>
      </li>
    )
  })
  return <ul>{links}</ul>
}

export default Tutorial
