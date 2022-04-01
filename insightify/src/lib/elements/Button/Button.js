import React from 'react'
import './Button.css';

export default function Button({content, bgCol, textCol}) {
  return (
    <div className="btn">
        {content}
    </div>
  )
}
