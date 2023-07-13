import { useState } from "react";
import "./People.css";

function People() {
  return (
    <>
      <div className="people">Number of People</div>

      <div className="people-total-wrap">
        <input type="number" placeholder="0" autoComplete="off" className="people-total" required />
      </div>
    </>
  );
}
export default People;
