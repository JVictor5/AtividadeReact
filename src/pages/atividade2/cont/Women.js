import React from "react";
import Buttons from "./ButtonsCont";
import imgWomen from "../../../img/menina.png";
import "./person.scss";

export default function Women({ count, setCount }) {
  return (
    <div className="counter">
      <div className="div">
        <h3>Mulheres</h3>
        <img className="imgPerson" src={imgWomen} alt="Women" />
        <div>
          <Buttons count={count} setCount={setCount} />
        </div>
      </div>
    </div>
  );
}
