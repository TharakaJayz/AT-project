import React from "react";
import "./Footer.css";
import logo from "../../Assets/Logo.png";
const Footer = () => {
  return (
    <div className="footer_main">
      <div className="footer_content">
        <div className="footer_content_div_1">
          <div className="footer_content_div_1_sub_div_1">
            <img src={logo} alt="AT-DIGITAL" />
            <p>
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve single objective - your
              business results.
            </p>
          </div>
          <div className="footer_content_div_1_sub_div_2">
            <section className="footer_content_div_1_sub_div_2_sec">
              <h3>Our Technologies</h3>
              <span>ReactJS</span>
              <span>Gatsby</span>
              <span>NextJS</span>
              <span>NodeJS</span>
              <span>GraphQL</span>
              <span>Laravel</span>
            </section>
            <section className="footer_content_div_1_sub_div_2_sec">
            <h3>Our Services</h3>
              <span>Social media Marketing</span>
              <span>Web & Mobile App Development</span>
              <span>Data & Analytics</span>
              <span>Google Marketing solutions</span>
              <span>Search Engine Optimization</span>
            </section>
          </div>
        </div>
        <div className="footer_content_div_2">
            <hr/>
            <section className="footer_content_div_2_sec" >
                <span>Privacy Policy</span>
                <span>|</span>
                <span>Terms & Conditions</span>
            </section>
        </div>
      </div>
    </div>
  );
};

export default Footer;
