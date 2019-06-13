import React from 'react'
const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: '#20232a',
        padding: '10px 0'
      }}
    >
      <section
        style={{
          color: '#fff',
          textAlign: 'center'
        }}
      >
        Copyright © {new Date().getFullYear()} sarva
      </section>
    </footer>
  )
}

export default Footer
