import React from 'react'
import { toolLinks } from './link'

const Tutorial: React.FC = () => {
  const links = Object.keys(toolLinks).map(item => {
    const title = toolLinks[item.toString()].label
    const sublinks = toolLinks[item.toString()].children.map(
      (link: { value: string | undefined; label: React.ReactNode }) => {
        return (
          <li key={link.value}>
            <a rel='noopener noreferrer' href={link.value} target='_blank'>
              {link.label}
            </a>
          </li>
        )
      }
    )
    return (
      <div key={title}>
        <h2>{title}</h2>
        <ul>{sublinks}</ul>
      </div>
    )
  })

  return <div> {links}</div>
}

export default Tutorial
