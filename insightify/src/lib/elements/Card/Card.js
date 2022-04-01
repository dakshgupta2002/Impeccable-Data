import React from 'react'
import './Card.css'

export default function Card({
    margin,
    padding,
    className,
    children,
    height,
    width,
    header
}) {
  return (
    <div className={`${className} ${'card'}`}>
        <div className={'header'}>
            {header}
        </div>

        <div className={'body'}>
            {children}
        </div>

    </div>
  )
}
