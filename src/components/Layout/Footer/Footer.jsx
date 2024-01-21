import React from 'react'
import scss from "./Footer.module.scss"
import ContactsPage from '../../Pages/ContactsPage'

const Footer = () => {
  return (
    <div className={scss.footer}>
      <ContactsPage/>
    </div>
  )
}

export default Footer