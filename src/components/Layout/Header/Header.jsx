import React from 'react'
import scss from "./Header.module.scss"
import Button from '../../UI/Buttons/Button'
import logo from '../../../assets/logo-name.jpg';

const Header = () => {
  const link=[
    {
      href:"http://",
      name:"ABOUT",
    },
    {
      href:"http://",
      name:"SERVICES",
    },
    {
      href:"http://",
      name:"TECHNOLOGIES",
    },
    {
      href:"http://",
      name:"HOW TO",
    },
  ]
  return (
  <>
    <header className={scss.header}>
      <div className='container'>
          <div className={scss.content}>

             <div className={scss.left}>
              <img src={logo} alt="logo" />
              <h1>NETFLIX</h1>
             </div>

             <div className={scss.middle}>
              <nav>
                  <ul>
                   
                      {link.map((item,index)=>
                        <li key={index}>
                          <a href={item.href}>{item.name}</a>

                        </li>

                      )}
                    
                  </ul>
              </nav>
             </div>

             <div className={scss.right}>
               <Button>SIGN UP</Button>
             </div>
             
          </div>
      </div>
     
    </header>
    </>
  )
}

export default Header