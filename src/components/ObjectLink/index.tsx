import React from 'react'

export interface LinkProps {
  links: {
    [propName: string]: {
      label: string
      children: Array<{ value: string; label: string }>
    }
  }
}
const ObjectLink: React.FC<LinkProps> = props => {
  const links = props.links
  const links_res = Object.keys(links).map(item => {
    const title = links[item].label
    const subLinks = links[item].children.map(link => {
      return (
        <li key={link.value}>
          <a rel='noopener noreferrer' href={link.value} target='_blank'>
            {link.label}
          </a>
        </li>
      )
    })
    return (
      <div key={title}>
        <h2>{title}</h2>
        <ul>{subLinks}</ul>
      </div>
    )
  })

  return <div>{links_res}</div>
}

export default ObjectLink
