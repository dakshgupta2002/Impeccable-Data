import React from 'react'
import './Button.css';

export default function Button({
  bgCol,
  textCol,
  type,
  height,
  width,
  children,
  onClick
}) {
  return (
    <button
      className="btn"
      type={type}
      style={{height: height, width: width}}
      onClick={onClick}
    >
      {children}

    </button>
  )
}
