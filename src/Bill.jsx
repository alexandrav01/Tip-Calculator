import { useState } from "react";
import "./Bill.css";
import iconDollar from "./assets/icon-dollar.svg";

function Bill() {
  return (
    <>
      <div className="bill">Bill</div>

      <div className="bill-total-wrap">
        <input type="number" placeholder="0" autoComplete="off" className="bill-total" required />
      </div>
    </>
  );
}
export default Bill;
