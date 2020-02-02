import React, { useState, useEffect } from "react";
import "./style.css";
import eastwood from "./eastwood-come-back-later.png";

import fetch from "../../utils/fetch";

const Header: React.FC = () => {
  const [weather, setWeather] = useState({ text: "", temperature: "" });

  const getWeather = async () => {
    const res = await fetch(`/weather`);
    const now = res.data.results[0].now;
    setWeather(now);
  };
  useEffect(() => {
    getWeather();
  }, []);

  const weatherText =
    weather.text && `上海 ${weather.text} ${weather.temperature} ℃`;
  return (
    <div>
      <header className="header">
        <span className="header-weather" style={{ float: "right" }}>
          {weatherText}
        </span>
      </header>
      <div style={{ textAlign: "center" }}>
        <img style={{ maxWidth: "500px" }} src={eastwood} alt="sss" />
      </div>
    </div>
  );
};

export default Header;
