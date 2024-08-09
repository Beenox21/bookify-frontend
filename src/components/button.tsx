import React from 'react'

function Button({name,bgColor,hover,textColor,otherStyles} : any) {
  return (
    <button className={`cursor-pointer ${hover} transition ${textColor}  ease-linear font-bold rounded-2xl ${bgColor} ${otherStyles}`}>{name}</button>
  )
}

export default Button