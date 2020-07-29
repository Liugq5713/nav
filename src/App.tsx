import React, { useEffect, useCallback, useState } from "react";
import ArrayLink from "./components/ArrayLink";
import fetch from "./utils/fetch.js";
import "./App.css";

const App: React.FC = () => {
  const [links, setLinks] = useState([]);

  const getLinks = useCallback(async () => {
    const res = await fetch("/getAllLinks");
    setLinks(res.data as any);
  }, []);
  useEffect(() => {
    getLinks();
  }, [getLinks]);
  return (
    <div>
      <ArrayLink title={"dd"} links={links}></ArrayLink>
    </div>
  );
};

export default App;
