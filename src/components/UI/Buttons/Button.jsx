import React from 'react'
import scss from "./Button.module.scss"


const Button = ({children}) => {
  return <button className={`${scss.no_bg}`}>{children}</button>
}

export default Button