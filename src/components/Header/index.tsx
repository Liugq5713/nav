import React, { useState, useEffect } from "react"
import "./style.css"
import fetch from "../../utils/fetch"

const Header: React.FC = () => {
  const [weather, setWeather] = useState({ text: "", temperature: "" })

  const getWeather = async () => {
    const res = await fetch(`/weather`)
    const now = res.data.results[0].now
    setWeather(now)
  }
  useEffect(() => {
    getWeather()
  }, [])
  return (
    <header className="header">
      <section>
        {weather.text} {weather.temperature}
      </section>
    </header>
  )
}

export default Header
