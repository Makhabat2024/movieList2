import React from 'react'
import scss from "../../components/Layout/Footer/Footer.module.scss"
import icon1 from "../../assets/icon1.png"
import icon2 from "../../assets/icon2.png"
import icon3 from "../../assets/icon3.png"
import icon4 from "../../assets/icon4.png"
import icon5 from "../../assets/icon5.png"

const ContactsPage = () => {
 
  
  const footerlink = [
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
           <div>
              <p>© Copyright 2024 Peaksoft</p>
           </div>                

          <div className={scss.content}>
        
             
              <img src={icon2} alt="icon" />
              <img src={icon3} alt="icon" />
              <img src={icon1} alt="icon" />
              <img src={icon4} alt="icon" />
              <img src={icon5} alt="icon" />
              
             </div>

             <div className={scss.middle}>
              <nav>
                  <ul>
                   
                      {footerlink.map((item,index)=>
                        <li key={index}>
                          <a href={item.href}>{item.name}</a>

                        </li>

                      )}
                    
                  </ul>
              </nav>
             </div>

            
             
          
      
    
    </>
  )
}


    
  


export default ContactsPage