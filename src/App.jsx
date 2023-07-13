import { useState } from "react";
import "./App.css";
import Bill from "./Bill";
import ButtonBox from "./ButtonBox";
import People from "./People";
import TotalBox from "./TotalBox";
import logo from "./assets/logo.svg";

function App() {
  return (
    <>
      <div className="logo-wrap">
        <img src={logo} />
      </div>
      <div className="wrapper">
        <Bill />
        <ButtonBox />
        <People />
        <TotalBox />
      </div>
    </>
  );
}

export default App;
