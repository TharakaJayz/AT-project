import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../Assets/Logo.png";
import { IoMenu } from "react-icons/io5";
import NavbarDropDown from "../NavbarDropDown/NavbarDropDown";
const Navbar = () => {
    const [navLogic,setNavLogic] = useState(false);
  return (
    <div className="navbar_main">
      <div className="nav_content flex">
        <section className="nav_content_sec-1">
          <img src={logo} alt="ATDIGITAL" />
        </section>
        <section className="nav_content_sec-2">
          <span className="nav_content_sec-2_span">SERVICES</span>
          <span className="nav_content_sec-2_span">ABOUT US</span>
          <span className="nav_content_sec-2_span">CONTACT US</span>
          <span className="nav_content_sec-2_span">CAREERS</span>
        <IoMenu className="nav_menu_svg" onClick={()=>{setNavLogic(!navLogic)}}/>
        </section>
        <NavbarDropDown logic ={navLogic} popCallback ={()=>{setNavLogic(!navLogic)}}/>
      </div>
    </div>
  );
};

export default Navbar;
