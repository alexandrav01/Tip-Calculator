import { useState } from "react";
import "./ButtonBox.css";
import Button from "./Button";

function ButtonBox() {
    const tipValues=["5%", "10%", "15%", "25%", "50%", "Custom"]

  return (
    <>
      <div className="title">Select Tip %</div>

      <div className="box-wrap">
      {/* {tipValues.map((tip, index)=>{
       <div key={index}>
        <Button tip={tip}/>
        </div>
      })} */}

      </div>
    </>
  );
}
export default ButtonBox;
