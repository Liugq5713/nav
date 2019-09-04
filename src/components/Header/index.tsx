import React, { useState, useEffect } from "react"
import "./style.css"
const Header: React.FC = () => {
  const [weather, setWeather] = useState()

  useEffect(() => {
    const script = document.createElement("script")
    script.type = "text/javascript"
    script.src =
      "https://api.seniverse.com/v3/weather/now.json?location=beijing&ts=1443079775&ttl=300&uid=[your_uid]&sig=[your_signature]&callback=showWeather"
  })
  return (
    <header className="header">
      <section>我来组成头部</section>
    </header>
  )
}

export default Header
