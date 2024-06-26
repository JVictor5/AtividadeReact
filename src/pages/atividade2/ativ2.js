import { useState } from "react";
import "./ativ2.scss";
import { FaRedo } from "react-icons/fa";

import Men from "./cont/Men";
import Women from "./cont/Women";

export default function Atv02() {
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);

  const reset = () => {
    setHomens(0);
    setMulheres(0);
  };
  return (
    <>
      <div className="totalAtiv2">
        <h1>Atividade 2</h1>
        <button className="reset" onClick={reset}>
          <FaRedo />
        </button>

        <div className="ativ2">
          <div className="total">
            <h2>Total</h2>
            <h3>{homens + mulheres}</h3>
          </div>
        </div>
        <div className="person">
          <div className="Men">
            <Men count={homens} setCount={setHomens} />
          </div>
          <div className="Women">
            <Women count={mulheres} setCount={setMulheres} />
          </div>
        </div>
      </div>
    </>
  );
}
