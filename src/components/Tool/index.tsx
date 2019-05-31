import React from 'react'
import { toolLinks } from './link'

const Tutorial: React.FC = () => {
  const links = Object.keys(toolLinks).map(item => {
    const title = toolLinks[item].label
    const sublinks = toolLinks[item].children.map(link => {
      return (
        <li key={link.value}>
          <a href={link.value} target='_blank'>
            {link.label}
          </a>
        </li>
      )
    })
    return (
      <div>
        <h2>{title}</h2>
        <ul>{sublinks}</ul>
      </div>
    )
  })
  return <ul>{links}</ul>
}

export default Tutorial
