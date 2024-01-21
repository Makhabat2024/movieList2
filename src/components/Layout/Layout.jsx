import React from "react";
import scss from "./Layout.module.scss";

import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";


const Layout=()=>{
    return <div className={scss.layout}>
        <Header/>
        <Main/>
        <Footer/>
       
       </div>
}
console.log(Layout());
export default Layout