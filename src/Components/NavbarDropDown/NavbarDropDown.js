import React from 'react';
import './NavbarDropDown.css';
import { IoMdClose } from "react-icons/io";
const NavbarDropDown = (props) => {
  return (
    <div className= {props.logic ? 'navDropDown_main navDropDown_display' : 'navDropDown_main'} >
        <div className='navDropDown_content'>

      <section className='navDropDown_sec-1'>
      <IoMdClose onClick={props.popCallback} className='nav_menu_svg'/>
      </section>
      <section className='navDropDown_sec-2'>
        <span className='navDropDown_sec-2_span'>SERVICES</span>
        <span className='navDropDown_sec-2_span'>ABOUT US</span>
        <span className='navDropDown_sec-2_span'>CONTACT US</span>
        <span className='navDropDown_sec-2_span'>CAREERS</span>
      </section>
        </div>
    </div>
  )
}

export default NavbarDropDown
