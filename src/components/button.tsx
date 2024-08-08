import React from 'react'

function Button({name,bgColor,hover,textColor,otherStyles} : any) {
  return (
    <div className={`cursor-pointer ${hover} transition ${textColor}  ease-linear font-bold rounded-2xl ${bgColor} ${otherStyles}`}>{name}</div>
  )
}

export default Button