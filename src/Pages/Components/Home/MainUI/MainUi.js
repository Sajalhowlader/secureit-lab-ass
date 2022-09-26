import React from "react";
import mainUiOne from "../../../../Assets/images/eq-image.png";
import Stpes from "./Stpes";
const MainUi = () => {
  return (
    <section>
      <div className="infoContainer">
        <div className="infoOne">
          <p>DEPENDENCY TYPE </p>
          <p className="infoTwo">CSA DETECTION</p>
          <span className="firstSpan" />
        </div>

        <div className="infoSecond">
          <div>
            <p>CATEGORE</p>
            <p className="infoTwo">EQUIPMENT</p>
          </div>
          <span />
          <div>
            <img src={mainUiOne} alt="" />
          </div>
        </div>
      </div>

      <div className="steps">
        <Stpes />
      </div>
    </section>
  );
};

export default MainUi;
