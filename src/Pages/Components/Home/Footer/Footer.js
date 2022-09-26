import React from "react";
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";
import footerLeft from "../../../../Assets/images/footer-dots-left.png";
import footerRight from "../../../../Assets/images/footer-dots-right.png";
const Footer = () => {
  return (
    <div className="footerInfo">
      <img src={footerLeft} alt="" />
      <div>
        <div>
          <p>db.testmyplan.io</p>
          <span className="firstSpan" />
        </div>
        <div>
          <FaTwitter className="footer_icon" />
          <FaFacebook className="footer_icon" />
          <FaInstagram className="footer_icon" />
          <FaTelegram className="footer_icon" />
        </div>
      </div>
      <img src={footerRight} alt="" />
    </div>
  );
};

export default Footer;
