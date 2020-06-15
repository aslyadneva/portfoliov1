import React from 'react'

const Button = ({title, type}) => {
  return (
    <button className={`Button Button--${type}`}>{title}</button>
  )
}

export default Button
 