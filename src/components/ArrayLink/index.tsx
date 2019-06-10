import React from 'react'

export interface LinkProps {
  links: Array<{ value: string; label: string }>
}

const ArrayLink: React.FC<LinkProps> = props => {
  const links = props.links.map(link => {
    return (
      <li key={link.value}>
        <a href={link.value} target='_blank' rel='noopener noreferrer'>
          {link.label}
        </a>
      </li>
    )
  })
  return <ul>{links}</ul>
}

export default ArrayLink
