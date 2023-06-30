import React from "react";
import "./footer.css";
// import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
const Footer = () => {
  return (
    <footer className="footer mt-5 p-4">
      
      <div className="container copyright-section">
      <h1 className="footer-heading">AUTONOID</h1>
        <p >2023 © Prith-ev. All rights reserved.</p>
      
        <ul className="social-icons"  >
          <li>
            <FaFacebookF />
          </li>
          <li>
            <BsTwitter />
          </li>
          <li>
            <GrLinkedinOption />
          </li>
          <li>
            <BsInstagram />
          </li>
        </ul>
      
      </div>
    </footer>
  );
};

export default Footer;
