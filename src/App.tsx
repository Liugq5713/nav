import React from "react";

import "./App.css";
import ArrayLink from "../src/components/ArrayLink";
import GithubCorner from "../src/components/GithubCorner";
import Search from "../src/components/Search";
import Footer from "../src/components/Footer";
import SideBar from "../src/components/SideBar";
import * as Read from "./data/links/read";
import * as Tool from "./data/links/tool";
const App: React.FC = () => {
  interface OptionValue {
    label: string;
    value: string;
    title?: string;
  }
  interface OptionsValue {
    [key: string]: Array<OptionValue>;
  }
  const Links: OptionsValue = { ...Read, ...Tool };
  let links_el = Object.keys(Links).map(name => {
    return <ArrayLink key={name} title={name} links={Links[name]} />;
  });

  let options: Array<OptionValue> = [];
  for (let link in Links) {
    options = options.concat(Links[link]);
  }

  const Cateogries = Object.keys(Links);
  return (
    <div>
      <GithubCorner />
      <div className="App" id="layout">
        <div id="menu">
          <SideBar cateogries={Cateogries}>
            <Search options={options} />
          </SideBar>
        </div>
        <div id="main">{links_el}</div>
        1
        <Footer />
      </div>
    </div>
  );
};

export default App;
