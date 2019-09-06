import React, { useState, useEffect } from "react"
import "./style.css"
const Header: React.FC = () => {
  const [weather, setWeather] = useState()

  useEffect(() => {
    fetch(`https://so-easy.cc/api/weather`)
      .then(res => {
        return res.json()
      })
      .then(function(response) {
        console.log("TCL: Header:React.FC -> response", response)
      })
  })
  return (
    <header className="header">
      <section>我来组成头部</section>
    </header>
  )
}

export default Header
