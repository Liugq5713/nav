import React, { useState, useEffect } from "react"
import "./style.css"
import fetch from "../../utils/fetch"

const Header: React.FC = () => {
  const [weather, setWeather] = useState()

  useEffect(() => {
    fetch(`/weather`)
      .then(res => {
        const {
          data: { results }
        } = res
        setWeather(results[0].now)
        console.log("TCL: Header:React.FC -> response", results)
      })
      .catch(() => {
        setWeather("获取天气超时")
      })
  })
  return (
    <header className="header">
      <section>{JSON.stringify(weather)}</section>
    </header>
  )
}

export default Header
