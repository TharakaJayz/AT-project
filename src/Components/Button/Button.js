import React from 'react'
import './Button.css';
const Button = (props) => {
  return (
    <button className= {`button_main ${props.styleBtn}`}>
      {props.children}
    </button>
  )
}

export default Button
