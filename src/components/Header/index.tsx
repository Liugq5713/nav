import React, { useState, useEffect } from "react"
import "./style.css"
import pig from "./pig.svg"

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

  const weatherText =
    weather.text && `上海 ${weather.text} ${weather.temperature} ℃`
  return (
    <header className="header">
      <div className="pure-menu pure-menu-horizontal">
        <a href="#" className="pure-menu-heading">
          不要忘记别人还在奔跑
          <img className="logo" width="30px" src={pig} alt="" />
        </a>
        <ul className="header-menu pure-menu-list">
          <li className="pure-menu-item">{weatherText}</li>
        </ul>
      </div>
    </header>
  )
}

export default Header
