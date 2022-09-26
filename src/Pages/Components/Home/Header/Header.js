import React from "react";
import navImgOne from "../../../../Assets/images/Logo.png";
import navImg from "../../../../Assets/images/strip.png";
const Header = () => {
  return (
    <nav>
      <div className="logo_name_img">
        <img src={navImgOne} alt="" />
        <p className="logo_name">KJ</p>
      </div>
      <img src={navImg} alt="" />
    </nav>
  );
};

export default Header;
