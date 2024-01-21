import React from 'react'

const Input = ({type,placeholder,value,setData}) => {
  return <input type={type} placeholder={placeholder} value={value} onChange={(event)=>{
     setData(event.target.value)
  }}/>
}

export default Input