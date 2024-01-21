import React from "react";
// import scss from "./Button.module.scss";
const ButtonCards = ({ className, children, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonCards;
